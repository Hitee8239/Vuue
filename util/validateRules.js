const rules = {
    require({label}){
        return v => !!v || `[${label}] 필수 입력입니다.`;
    },
    min({label, len=3}){
        return v => !!v ? v.length >= len || `[${label}] ${len}자 이상 입력하세요`: true; 
    },
    alphaNum(){
        return v => !!v ? /^[a-zA-z0-9]+$/.test(v) || `영어와 숫자만 입력가능합니다.` :true;
    },
    pattern({label, pattern}){
        return v => !!v ? pattern.test(v) || `[${label}] 형식에 맞게 입력하세요. (영문 + 숫자)` :true;
    },
    matchValue(origin){
        return v => origin === v || '비밀번호가 일치하지 않습니다.'
    },
    id(options){
        const defaultOptions = {
            label : '아이디',
            len : 3,
            require : true,
        };
        const opt = Object.assign(defaultOptions, options);
        const arr = [];
        if(opt.require){
            arr.push(rules.require(opt));
        }
        arr.push(rules.min(opt));
        arr.push(rules.alphaNum());
        return arr;
    },
    name(options){
        const defaultOptions = {
			label : '이름',
			len : 2,
			required : true,
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if(opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.min(opt));
		return arr;
	},
	email(options) {
		const defaultOptions = {
			label : '이메일',
			required : true,
			pattern : /.+@.+\..+/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if(opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.pattern(opt));
		return arr;
    },
	password(options) {
		const defaultOptions = {
			label : '비밀번호',
			required : true,
			len : 6,
			pattern : /^.*(?=^.{6,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if(opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.min(opt));
		arr.push(rules.pattern(opt));
		return arr;
	},
    date(options) {
		const defaultOptions = {
			label : "날자",
			info : 'YYYY-MM-DD 형식에 맞게 입력하세요',
			required: true,
			pattern : /^\d{4}-\d{2}-\d{2}$/
		};
		const opt = Object.assign(defaultOptions, options);
		const ruleArr= [];
		if(opt.required) {
			ruleArr.push(rules.require(opt));
		}
		ruleArr.push(rules.pattern(opt));
		return ruleArr;
	},
    phone(options) {
		const defaultOptions = {
			label : '전화번호',
			required : true,
			pattern : /^(\d{2,3}-)?\d{3,4}-\d{4}$/
		};
		const opt = Object.assign(defaultOptions, options);
		const arr = [];
		if(opt.required) {
			arr.push(rules.require(opt));
		}
		arr.push(rules.pattern(opt));
		return arr;
	},
};

module.exports = rules;