const fs = require("fs");
const db = require("../../plugins/mysql");
const jwt = require("../../plugins/jwt");

const sqlHelper = require("../../../util/sqlHelper");
const TABLE = require("../../../util/TABLE");
const { LV } = require("../../../util/level");
const moment = require("../../../util/moment");
const { getIp } = require("../../../util/lib");

const BoardModel = {
  async postBoard(req) {
    const at = moment().format("LT");
    const ip = getIp(req);

    const payload = {
      ...req.body,
      db_create_at: at,
      db_create_ip: ip,
      db_update_at: at,
      db_update_ip: ip,
    };
    const sql = sqlHelper.Insert(TABLE.board_data, payload);
    const [row] = await db.execute(sql.query, sql.values);

    return row.affectedRows == 1;
  },
};
