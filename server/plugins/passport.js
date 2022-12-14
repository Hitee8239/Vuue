require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('./jwt');
const memberModel = require('../api/_model/memberModel');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const KakaoStrategy = require('passport-kakao').Strategy
const NaverStrategy = require('passport-naver').Strategy;

const {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	CALLBACK_URL,
	KAKAO_CLIENT_ID,
	KAKAO_CLIENT_SECRET,
	NAVER_CLIENT_ID,
	NAVER_CLIENT_SECRET,
} = process.env;

module.exports = (app) => {
  app.use(passport.initialize());

  passport.use(
    new LocalStrategy(
      {
        usernameField: "mb_id",
        passwordField: "mb_password",
      },
      async (mb_id, mb_password, done) => {
        try {
          mb_password = jwt.generatePassword(mb_password);
          const member = await memberModel.getMemberBy({ mb_id, mb_password });
          return done(null, member);
        } catch (e) {
          console.log(e.message);
          return done(null, null, "아이디 또는 비밀번호가 올바르지 않습니다.");
        }
      }
    )
  );


//구글로그인 
  passport.use(new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: `${CALLBACK_URL}/api/member/social-callback/google`,
			passReqToCallback: true
		},
		async function (request, accessToken, refreshToken, profile, done) {
			if (profile && profile.id) {
				const member = await memberModel.loginGoogle(request, profile);
				done(null, member);
			} else {
				done('로그인 실패', null);
			}

		}
	));
//카카오로그인
	passport.use(new KakaoStrategy(
		{
			clientID: KAKAO_CLIENT_ID,
			clientSecret: KAKAO_CLIENT_SECRET,
			callbackURL: `${CALLBACK_URL}/api/member/social-callback/kakao`,
			passReqToCallback: true
		},
		async (request, accessToken, refreshToken, profile, done) => {
			if (profile && profile.id) {
				const member = await memberModel.loginKakao(request, profile);
				done(null, member);
			} else {
				done('로그인 실패', null);
			}
		}
	));

  //네이버로그인
  passport.use(new NaverStrategy(
		{
			clientID: NAVER_CLIENT_ID,
			clientSecret: NAVER_CLIENT_SECRET,
			callbackURL: `${CALLBACK_URL}/api/member/social-callback/naver`,
			passReqToCallback: true
		},
		async (request, accessToken, refreshToken, profile, done) => {
			if (profile && profile.id) {
				// console.log(profile);
				const member = await memberModel.loginNaver(request, profile);
				done(null, member);
			} else {
				done('로그인 실패', null);
			}
		}
	));

	



  //인증
  app.use(async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next();
    const { mb_id } = jwt.vetify(token);
    if (!mb_id) return next();
    try {
      const member = await memberModel.getMemberBy({ mb_id });
      req.login(member, { session: false }, (err) => {});
    } catch (e) {
      console.log(e);
    }
    next();
  });
  

}
