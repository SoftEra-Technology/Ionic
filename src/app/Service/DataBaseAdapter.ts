import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import {DataBaseHelper} from './DataBaseHelper'
import { Platform, ToastController } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
  })

  export class getWritableDatabase
{
    database_name:string = "AUDIT_DB.db"
    public database:SQLiteObject;
    constructor(
        public sqlite: SQLite, 
        
        //public  dbHelper : DataBaseHelper,
        public platform: Platform

         ) { 

          // this.sqlite.create({
          //   name: 'AUDIT_DB.db',
          //   location: 'default'
          // })
          // .then((db: SQLiteObject) => {
          //     this.database = db; //set the object to your own var
          //     db.executeSql("CREATE TABLE USER_TB(_id integer primary key autoincrement,EMP_ID text not null, EMP_NAME text not null,EMAIL text not null,PASSWORD text not null,BU_ID integer not null,BU_NAME text not null);", []);
          // });

         }

           
            // public Cursor fetchAllAudits() {
            //     return database.query("AUDIT_TB", new String[]{"_id", "AUDIT_ID", "AUDIT_NAME", "AUDIT_TYPE_ID", "AUDIT_TYPE", "AUDIT_PT", "QUESTION_COUNT"}, null, null, null, null, null);
            // }
        
            // public long createAudit(String sAuditID, String sAuditName, String sAuditTypeId, String sAuditTyp, String sAuditStage, String sAuditPt, String sQuestionCnt) {
            //     ContentValues initialValues = new ContentValues();
            //     initialValues.put("AUDIT_ID", sAuditID);
            //     initialValues.put("AUDIT_NAME", sAuditName);
            //     initialValues.put("AUDIT_TYPE_ID", sAuditTypeId);
            //     initialValues.put("AUDIT_TYPE", sAuditTyp);
            //     initialValues.put("AUDIT_STAGE", sAuditStage);
            //     initialValues.put("AUDIT_PT", sAuditPt);
            //     initialValues.put("QUESTION_COUNT", sQuestionCnt);
            //     return database.insert("AUDIT_TB", null, initialValues);
            // }
        
            // public long createSection(String sAuditID, String sSectionId, String sParentSectionId, String sSectionName, String sSectionDesc,
            //                           String sSectionOrder, String sSectionPt, String sTQuestionCnt, String sSQuestionCnt, String sCQuestionCnt) {
            //     ContentValues initialValues = new ContentValues();
            //     initialValues.put("AUDIT_ID", sAuditID);
            //     initialValues.put("SECTION_ID", sSectionId);
            //     initialValues.put("PARENT_SECTION_ID", sParentSectionId);
            //     initialValues.put("SECTION_NAME", sSectionName);
            //     initialValues.put("SECTION_DESC", sSectionDesc);
            //     initialValues.put("SECTION_ORDER", sSectionOrder);
            //     initialValues.put("SECTION_PT", sSectionPt);
            //     initialValues.put("T_QUESTION_COUNT", sTQuestionCnt);
            //     initialValues.put("S_QUESTION_COUNT", sSQuestionCnt);
            //     initialValues.put("C_QUESTION_COUNT", sCQuestionCnt);
            //     return database.insert("SECTION_TB", null, initialValues);
            // }
        
            // public long createQuestion(String sAuditID, String sSectionId, String sQuestionId, String sQuestionTypeId,
            //                            String sQuestionName, String sQuestionType, String sQuestionOrder, String sIsCritical, String sQuestionMarks) {
            //     ContentValues initialValues = new ContentValues();
            //     initialValues.put("AUDIT_ID", sAuditID);
            //     initialValues.put("SECTION_ID", sSectionId);
            //     initialValues.put("QUESTION_ID", sQuestionId);
            //     initialValues.put("QUESTION_TYPE_ID", sQuestionTypeId);
            //     initialValues.put("QUESTION_NAME", sQuestionName);
            //     initialValues.put("QUESTION_TYPE", sQuestionType);
            //     initialValues.put("QUESTION_ORDER", sQuestionOrder);
            //     initialValues.put("IS_CRITICAL", sIsCritical);
            //     initialValues.put("QUESTION_MARKS", sQuestionMarks);
            //     return database.insert("QUESTION_TB", null, initialValues);
            // }
        
            // createQChoice(String sAuditId, String sSectionId, String sQuestionId, String sChoiceId, String sChoiceText, String sMarks, String sComntReq, String sIsNegative) {
            //     String sql = "";
            //     sql = "INSERT INTO QUESTION_CHOICE_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,CHOICE_ID,CHOICE_TEXT,POINTS,COMMENTS_REQUIRED,IS_NEGATIVE) " +
            //             "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sChoiceId + ",'" + sChoiceText + "'," + sMarks + "," +
            //             "'" + sComntReq + "','" + sIsNegative + "')";
            //     database.execSQL(sql);
            // }
        
            // public long createAttemptedAudit(String sAuditID, String sAuditName, String sStrCode, String sStrName, String sUserId, String sStrManager, String sAuditDt, String sAuditStatus, String sUniqueId, String sAuditFindings) {
            //     ContentValues initialValues = new ContentValues();
            //     initialValues.put("AUDIT_ID", sAuditID);
            //     initialValues.put("AUDIT_NAME", sAuditName);
            //     initialValues.put("STR_CODE", sStrCode);
            //     initialValues.put("STR_NAME", sStrName);
            //     initialValues.put("USER_ID", sUserId);
            //     initialValues.put("STR_MANAGER", sStrManager);
            //     initialValues.put("AUDIT_DT", sAuditDt);
            //     initialValues.put("AUDIT_STATUS", sAuditStatus);
            //     initialValues.put("UNIQUE_ID", sUniqueId);
            //     initialValues.put("AUDIT_FINDINGS", sAuditFindings);
            //     return database.insert("AUDIT_ATTEMPTED_TB", null, initialValues);
            // }
        
            // public Cursor fetchAttemptedAuditForStore(long lAuditId, String _sStoreCode) throws SQLException {
            //     Cursor mCursor = database.query(true, "AUDIT_ATTEMPTED_TB", new String[]{"ATTEMPTED_ID", "AUDIT_ID", "STR_CODE", "USER_ID", "STR_MANAGER", "AUDIT_DT", "AUDIT_STATUS",
            //             "UNIQUE_ID"}, "AUDIT_ID=" + lAuditId + " AND STR_CODE='" + _sStoreCode + "' ORDER BY ATTEMPTED_ID DESC", null, null, null, null, null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // createAttemptedSectionBySQL(long lAttemptedId, long lAuditId) {
            //     database.execSQL("INSERT INTO AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME,SECTION_DESC,SECTION_ORDER,SECTION_PT," +
            //             "T_QUESTION_COUNT,QUESTION_ANSWERED,S_QUESTION_COUNT,C_QUESTION_COUNT) SELECT " + lAttemptedId + ",AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME," +
            //             "SECTION_DESC,SECTION_ORDER,SECTION_PT,T_QUESTION_COUNT,'',S_QUESTION_COUNT,C_QUESTION_COUNT FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId);
            // }
        
            // createAttemptedQuestionBySQL(long lAttemptedId, long lAuditId) {
            //     database.execSQL("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," +
            //             "IS_CRITICAL,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IMAGE_NAME,IS_INCLUDED,IMAGE_PUSHED) SELECT " +
            //             lAttemptedId + ",AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER," +
            //             "IS_CRITICAL,QUESTION_MARKS,0,'Open','','','Yes','Yes' FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId);
            // }
        
            // public Cursor fetchAttemptedSection(long lAttemptedId, long lAuditId) throws SQLException {
            //     Cursor mCursor = database.rawQuery("SELECT B.SECTION_NAME AS P_SECTION_NAME,A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME,A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
            //             "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID " +
            //             "AND QUESTION_STATUS<>'Open')+(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID " +
            //             "AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
            //             "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes') AS SECTION_MARKS," +
            //             "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
            //             "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
            //             "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
            //             "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.S_QUESTION_COUNT>0", null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // public Cursor fetchAttemptedOpenAuditByUser(String _sUserId) throws SQLException {
            //     String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," +
            //             "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," +
            //             "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," +
            //             "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," +
            //             "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," +
            //             "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Open'";
        
            //     Cursor mCursor = database.rawQuery(sql, null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // public Cursor fetchAttemptedAuditBySQL(long lAttemptedId, long lAuditId) {
            //     String sql = "SELECT AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,UNIQUE_ID FROM AUDIT_ATTEMPTED_TB " +
            //             "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId;
        
            //     Cursor mCursor = database.rawQuery(sql, null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // public Cursor fetchAttemptedSectionQuestionBySQL(String sType, long lAttemptedId, long lAuditId, long lId) throws SQLException {
            //     String sql = "";
        
            //     if ("Audit".equals(sType)) {
            //         sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
            //                 "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
            //                 "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
            //                 "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId;
            //     } else if ("Section".equals(sType)) {
            //         sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
            //                 "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
            //                 "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
            //                 "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.SECTION_ID=" + lId;
            //     } else if ("Question".equals(sType)) {
            //         sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
            //                 "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
            //                 "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
            //                 "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND B.QUESTION_ID=" + lId;
            //     } else {
            //         sql = "SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,B.QUESTION_ID,B.QUESTION_NAME,B.QUESTION_ORDER,B.QUESTION_TYPE_ID," +
            //                 "B.QUESTION_TYPE,B.QUESTION_COMMENT,B.IMAGE_NAME FROM AUDIT_ATTEMPTED_SECTION A,AUDIT_ATTEMPTED_QUESTIONS B " +
            //                 "WHERE A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID AND A.SECTION_ID=B.SECTION_ID " +
            //                 "AND A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND 1=2";
            //     }
        
            //     Cursor mCursor = database.rawQuery(sql, null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // public Cursor fetchAttemptedCompletedAuditByUser(String _sUserId) throws SQLException {
            //     String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,AUDIT_NAME,STR_CODE,STR_NAME,USER_ID,STR_MANAGER,AUDIT_DT,AUDIT_STATUS," +
            //             "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID) AS TOTALQUESTION," +
            //             "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND AUDIT_ID=t.AUDIT_ID AND QUESTION_STATUS<>'Open') AS ATTEMPTQUESTION," +
            //             "(SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND IS_INCLUDED='Yes') AS AUDIT_POINTS," +
            //             "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=t.ATTEMPTED_ID AND QUESTION_STATUS<>'Open'),0) MARKS_SCORED," +
            //             "UNIQUE_ID FROM AUDIT_ATTEMPTED_TB t WHERE USER_ID='" + _sUserId + "' AND AUDIT_STATUS='Close'";
            //     Cursor mCursor = database.rawQuery(sql, null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // public Cursor fetchImageNotPushedAttemptedQuestionBySQL(long lAttemptedId, long lAuditId) {
            //     String sql = "SELECT AUDIT_ID,SECTION_ID,QUESTION_ID,0 AS KEY_FIELD_VALUE_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS " +
            //             "WHERE QUESTION_STATUS='Done' AND ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " +
            //             "AND IMAGE_NAME<>'null' " +
            //             "UNION " +
            //             "SELECT Y.AUDIT_ID,Y.SECTION_ID,Y.QUESTION_ID,X.KEY_FIELD_VALUE_ID,X.IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTION_FIELD X,AUDIT_ATTEMPTED_QUESTIONS Y " +
            //             "WHERE X.AUDIT_ID=Y.AUDIT_ID AND X.SECTION_ID=Y.SECTION_ID AND X.QUESTION_ID=Y.QUESTION_ID AND Y.QUESTION_STATUS='Done' " +
            //             "AND X.IMAGE_NAME<>'' AND X.IMAGE_NAME<>'null' AND X.IMAGE_PUSHED='No' AND X.ATTEMPTED_ID=" + lAttemptedId + " AND X.AUDIT_ID=" + lAuditId + " " +
            //             "UNION " +
            //             "SELECT Y.AUDIT_ID,Y.SECTION_ID,Y.QUESTION_ID,X.VALUE_ID AS KEY_FIELD_VALUE_ID,X.IMAGE_NAME FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED X,AUDIT_ATTEMPTED_QUESTIONS Y " +
            //             "WHERE X.AUDIT_ID=Y.AUDIT_ID AND X.SECTION_ID=Y.SECTION_ID AND X.QUESTION_ID=Y.QUESTION_ID AND Y.QUESTION_STATUS='Done' " +
            //             "AND X.IMAGE_NAME<>'' AND X.IMAGE_NAME<>'null' AND X.IMAGE_PUSHED='No' AND X.ATTEMPTED_ID=" + lAttemptedId + " AND X.AUDIT_ID=" + lAuditId;
        
            //     Cursor mCursor = database.rawQuery(sql, null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
            // public Cursor fetchAttemptedOpenAuditCount() {
            //     Cursor mCursor = database.rawQuery("SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB t WHERE AUDIT_STATUS='Open'", null);
            //     if (mCursor != null) {
            //         mCursor.moveToFirst();
            //     }
            //     return mCursor;
            // }
        
        //      deletAttemptedAuditById(int attemtedId) {
        //         String sql = "DELETE FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_RECIVING_QUESTIONS WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_OPTION WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_RANGE WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_VALUE WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTION_FIELD_CHOICE WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        
        //         sql = "DELETE FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + attemtedId;
        //         database.execSQL(sql);
        //     }
        
        //     public Cursor fetchAttemptedQuestionBySQL(long lAttemptedId, long lAuditId, long lSectionId) throws SQLException {
        //         String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID,QUESTION_ORDER," +
        //                 "CASE WHEN IS_INCLUDED='Yes' THEN QUESTION_MARKS ELSE 0 END AS QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED,IS_CRITICAL " +
        //                 "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=" + lSectionId + " ORDER BY QUESTION_ORDER";
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchAttemptedQuestionChoiceBySQL(long lAttemptedId, long lAuditId, long lQuestionId) throws SQLException {
        //         String sql = "SELECT A.ATTEMPTED_ID,A.AUDIT_ID,A.SECTION_ID,A.QUESTION_ID,A.CHOICE_ID,A.CHOICE_TEXT,A.POINTS,A.COMMENTS,A.CHOICE_VALUE,B.IMAGE_NAME " +
        //                 "FROM AUDIT_ATTEMPTED_QUESTIONS_CHOICE A INNER JOIN AUDIT_ATTEMPTED_QUESTIONS B ON A.ATTEMPTED_ID=B.ATTEMPTED_ID AND A.AUDIT_ID=B.AUDIT_ID " +
        //                 "AND A.SECTION_ID=B.SECTION_ID AND A.QUESTION_ID=B.QUESTION_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " AND A.QUESTION_ID=" + lQuestionId;
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchAttemptedAuditPrevQuestionBySQL(long lAttemptedId, long lSectionId, long lAuditId, long lQuestionId) throws SQLException {
        //         String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," +
        //                 "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " +
        //                 "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM " +
        //                 "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER<(SELECT QUESTION_ORDER " +
        //                 "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))";
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchPrevAttemptedSection(long lAttemptedId, long lAuditId, long lSectionId) throws SQLException {
        //         String sql = "SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME," +
        //                 "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
        //                 "AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME," +
        //                 "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
        //                 "AND QUESTION_ORDER=(SELECT MAX(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND A.AUDIT_ID=" + lAuditId + " AND A.SECTION_ORDER=(SELECT MAX(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND AUDIT_ID=" + lAuditId + " AND SECTION_ORDER<(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + "))";
        
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchAttemptedAuditNextQuestionBySQL(long lAttemptedId, long lSectionId, long lAuditId, long lQuestionId) throws SQLException {
        //         String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_TYPE_ID," +
        //                 "QUESTION_ORDER,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IS_INCLUDED FROM AUDIT_ATTEMPTED_QUESTIONS " +
        //                 "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM " +
        //                 "AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ORDER>(SELECT QUESTION_ORDER " +
        //                 "FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND SECTION_ID=" + lSectionId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + "))";
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchNextAttemptedSection(long lAttemptedId, long lAuditId, long lSectionId) throws SQLException {
        //         /*String sql="SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID="+lAttemptedId+" AND AUDIT_ID="+lAuditId+" "+
        //                 "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID="+lAttemptedId+" "+
        //                 "AND AUDIT_ID="+lAuditId+" AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME,"+
        //                 "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID="+lAttemptedId+" AND AUDIT_ID="+lAuditId+" AND SECTION_ID=A.SECTION_ID "+
        //                 "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID="+lAttemptedId+" AND AUDIT_ID="+lAuditId+" "+
        //                 "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME,"+
        //                 "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID="+lAttemptedId+" AND AUDIT_ID="+lAuditId+" AND SECTION_ID=A.SECTION_ID "+
        //                 "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID="+lAttemptedId+" AND AUDIT_ID="+lAuditId+" "+
        //                 "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID="+lAttemptedId+" "+
        //                 "AND A.AUDIT_ID="+lAuditId+" AND A.SECTION_ORDER=(SELECT MIN(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID="+lAttemptedId+" "+
        //                 "AND AUDIT_ID="+lAuditId+" AND SECTION_ORDER>(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID="+lAttemptedId+" "+
        //                 "AND AUDIT_ID="+lAuditId+" AND SECTION_ID="+lSectionId+"))";*/
        //         String sql = "SELECT (SELECT QUESTION_ID FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=A.SECTION_ID AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID)) AS QUESTION_ID,A.SECTION_ID,A.SECTION_NAME," +
        //                 "(SELECT QUESTION_NAME FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
        //                 "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_NAME," +
        //                 "(SELECT QUESTION_TYPE FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=A.SECTION_ID " +
        //                 "AND QUESTION_ORDER=(SELECT MIN(QUESTION_ORDER) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=A.SECTION_ID)) AS QUESTION_TYPE FROM AUDIT_ATTEMPTED_SECTION A WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.AUDIT_ID=" + lAuditId + " " +
        //                 "AND A.SECTION_ORDER=(SELECT MIN(SECTION_ORDER) FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND PARENT_SECTION_ID=(SELECT PARENT_SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=" + lSectionId + ") AND SECTION_ORDER>(SELECT SECTION_ORDER FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ")) AND A.PARENT_SECTION_ID=(" +
        //                 "SELECT PARENT_SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " " +
        //                 "AND SECTION_ID=" + lSectionId + ")";
        
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchQuestionById(long lAuditId, long lSectionId, long lQuestionId) throws SQLException {
        //         String _sql = "";
        //         Cursor mCursor = database.rawQuery("SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER,IS_CRITICAL," +
        //                 "QUESTION_MARKS,(SELECT COUNT(*) FROM QUESTION_TB WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + ") AS CNT FROM QUESTION_TB t " +
        //                 "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchQuestionBased(long lAuditId, long lSectionId, long lQuestionId) throws SQLException {
        //         Cursor mCursor = database.query(true, "QUESTION_STANDARD_TB", new String[]{"_id", "AUDIT_ID", "SECTION_ID", "QUESTION_ID", "STANDARD_ID", "STANDARD_TYPE",
        //                 "MIN_RANGE", "MAX_RANGE", "FIX", "UOM", "FIELD_LABEL", "IS_PREDEFINED"}, "AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, null, null, null, null, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchQuestionBasedValues(long lAuditId, long lSectionId, long lQuestionId, long lStandardId) throws SQLException {
        //         String _sql = "SELECT _id,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME FROM QUESTION_STANDARD_PREDEFINED_TB " +
        //                 "WHERE AUDIT_ID=" + lAuditId + " AND SECTION_ID=" + lSectionId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId;
        //         Cursor mCursor = database.rawQuery(_sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchQuestionChoice(long lAuditId, long lSectionId, long lQuestionId) throws SQLException {
        //         Cursor mCursor = database.query(true, "QUESTION_CHOICE_TB", new String[]{"_id", "AUDIT_ID", "SECTION_ID", "QUESTION_ID", "CHOICE_ID", "CHOICE_TEXT", "POINTS", "COMMENTS_REQUIRED", "IS_NEGATIVE"}, "AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId, null, null, null, null, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        
        //     executeSQL(String sql) {
        //         database.execSQL(sql);
        //     }
        
        //     public Cursor rawQuery(String sql) {
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        
        //     public Cursor fetchTopAttemptedSection(long lAttemptedId, long lAuditId) throws SQLException {
        //         Cursor mCursor = database.rawQuery("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
        //                 "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
        //                 "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
        //                 "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
        //                 "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                 "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                 "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
        //                 "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                 "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                 "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
        //                 "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=0 ORDER BY A.SECTION_ORDER", null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchSLAttemptedSection(long lAttemptedId, long lSectionId, long lAuditId) throws SQLException {
        //         Cursor mCur = database.rawQuery("SELECT * FROM SECTION_TB WHERE AUDIT_ID=" + lAuditId + " AND PARENT_SECTION_ID=" + lSectionId, null);
        //         if (mCur != null) {
        //             if (mCur.getCount() > 0) {
        //                 Cursor mCursor = database.rawQuery("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
        //                         "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
        //                         "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
        //                         "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
        //                         "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                         "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                         "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
        //                         "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                         "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                         "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
        //                         "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", null);
        //                 if (mCursor != null) {
        //                     mCursor.moveToFirst();
        //                 }
        //                 return mCursor;
        //             } else {
        //                 Cursor mCursor = database.rawQuery("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
        //                         "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
        //                         "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
        //                         "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
        //                         "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                         "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                         "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
        //                         "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                         "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                         "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
        //                         "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", null);
        //                 if (mCursor != null) {
        //                     mCursor.moveToFirst();
        //                 }
        //                 return mCursor;
        //             }
        //         } else {
        //             Cursor mCursor = database.rawQuery("SELECT A.SECTION_ID,A.SECTION_NAME,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT," +
        //                     "((SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND SECTION_ID=A.SECTION_ID AND QUESTION_STATUS<>'Open')+" +
        //                     "(SELECT COUNT(*) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND AUDIT_ID=A.AUDIT_ID AND QUESTION_STATUS<>'Open' AND SECTION_ID IN(" +
        //                     "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID))) AS ATTEMPTQUESTION," +
        //                     "(IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                     "IFNULL((SELECT SUM(QUESTION_MARKS) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                     "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS SECTION_MARKS," +
        //                     "(IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND SECTION_ID=A.SECTION_ID AND IS_INCLUDED='Yes'),0)+" +
        //                     "IFNULL((SELECT SUM(MARKS_SCORED) FROM AUDIT_ATTEMPTED_QUESTIONS WHERE ATTEMPTED_ID=A.ATTEMPTED_ID AND IS_INCLUDED='Yes' AND SECTION_ID IN(" +
        //                     "SELECT SECTION_ID FROM AUDIT_ATTEMPTED_SECTION WHERE PARENT_SECTION_ID=A.SECTION_ID)),0)) AS MARKS_SCORED FROM AUDIT_ATTEMPTED_SECTION A " +
        //                     "LEFT JOIN AUDIT_ATTEMPTED_SECTION B ON A.PARENT_SECTION_ID=B.SECTION_ID AND A.ATTEMPTED_ID=B.ATTEMPTED_ID WHERE A.ATTEMPTED_ID=" + lAttemptedId + " AND A.PARENT_SECTION_ID=" + lSectionId + " ORDER BY A.SECTION_ORDER", null);
        //             if (mCursor != null) {
        //                 mCursor.moveToFirst();
        //             }
        //             return mCursor;
        //         }
        //     }
        
        //     public Cursor fetchGenericImageNotPushedAttemptedQuestionBySQL(long lAttemptedId, long lAuditId) {
        //         String sql = "SELECT AUDIT_ID,IMAGE_NAME FROM AUDIT_ATTEMPTED_IMAGES_TB WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND IMAGE_PUSHED='No' AND IMAGE_NAME<>'' " +
        //                 "AND IMAGE_NAME<>'null'";
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //    DeleteGenericImages(String sUniqueID, String sAttemptedId) {
        //         return database.delete("AUDIT_ATTEMPTED_IMAGES_TB", "ATTEMPTED_ID=" + sAttemptedId, null) > 0;
        //     }
        
        //     SaveGenericImage(String sAttemptedId, String sUniqueID, String sAuditId, String sStoreId, String sImageNm, int i) {
        //         String sql = "";
        //         sql = "INSERT INTO AUDIT_ATTEMPTED_IMAGES_TB(ATTEMPTED_ID,AUDIT_ID,STR_CODE,UNIQUE_ID,IMAGE_NAME,IMAGE_PUSHED) VALUES(" + sAttemptedId + "," + sAuditId + "," +
        //                 "'" + sStoreId + "','" + sUniqueID + "','" + sImageNm + "','No')";
        //         database.execSQL(sql);
        //     }
        
        //     UpdateAuditFindings(String sAttemptedId, String sUniqueID, String sAuditId, String sAuditFindings) {
        //         String sql = "";
        //         sql = "UPDATE AUDIT_ATTEMPTED_TB SET AUDIT_FINDINGS='" + sAuditFindings.replace("'", "''") + "' WHERE ATTEMPTED_ID=" + sAttemptedId + " " +
        //                 "AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'";
        //         database.execSQL(sql);
        //     }
        
        //     public Cursor GetAuditFindings(String sAttemptedId, String sUniqueID, String sAuditId) {
        //         String sql = "SELECT AUDIT_FINDINGS FROM AUDIT_ATTEMPTED_TB WHERE ATTEMPTED_ID=" + sAttemptedId + " AND AUDIT_ID=" + sAuditId + " AND UNIQUE_ID='" + sUniqueID + "'";
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     createQStandard(String sAuditId, String sSectionId, String sQuestionId, String sStandardId, String sStandardTyp, String sMinRng, String sMaxRng, String sFix, String sUOM, String sFieldLbl, String sPreDefined) {
        //         String sql = "";
        //         sql = "INSERT INTO QUESTION_STANDARD_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,STANDARD_TYPE,MIN_RANGE,MAX_RANGE,FIX,UOM,FIELD_LABEL,IS_PREDEFINED) " +
        //                 "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + ",'" + sStandardTyp + "','" + sMinRng + "'," +
        //                 "'" + sMaxRng + "','" + sFix + "','" + sUOM + "','" + sFieldLbl + "','" + sPreDefined + "')";
        //         database.execSQL(sql);
        //     }
        
        //     createQStandardPreDefined(String sAuditId, String sSectionId, String sQuestionId, String sStandardId, String sValueId, String sValueNm) {
        //         String sql = "";
        //         sql = "INSERT INTO QUESTION_STANDARD_PREDEFINED_TB(AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,VALUE_ID,VALUE_NAME) " +
        //                 "VALUES(" + sAuditId + "," + sSectionId + "," + sQuestionId + "," + sStandardId + "," + sValueId + ",'" + sValueNm + "')";
        //         database.execSQL(sql);
        //     }
        
        //     public Cursor fetchAttemptedQuestionStandardBySQL(long lAttemptedId, long lAuditId, long lQuestionId) throws SQLException {
        //         String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,STANDARD_ID,FIELD_VALUE,COMMENTS,CHOICE_VALUE,POINTS,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD " +
        //                 "WHERE ATTEMPTED_ID=" + lAttemptedId + " AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId;
        
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor fetchAttemptedQuestionStandardValueBySQL(long lAttemptedId, long lAuditId, long lQuestionId, long lStandardId) throws SQLException {
        //         String sql = "SELECT ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_NAME,STANDARD_ID,VALUE_ID,VALUE_NAME,VALUE_OBSERVED,POINTS,COMMENTS," +
        //                 "CHOICE_VALUE,IMAGE_NAME,IMAGE_PUSHED FROM AUDIT_ATTEMPTED_QUESTIONS_STANDATD_PREDEFINED WHERE ATTEMPTED_ID=" + lAttemptedId + " " +
        //                 "AND AUDIT_ID=" + lAuditId + " AND QUESTION_ID=" + lQuestionId + " AND STANDARD_ID=" + lStandardId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkAudit(String sAuditId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM AUDIT_TB WHERE AUDIT_ID=" + sAuditId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkSection(String sAuditId, String sSectionId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM SECTION_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkQuestion(String sAuditId, String sSectionId, String sQuestionId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM QUESTION_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkQuestionChoice(String sAuditId, String sSectionId, String sQuestionId, String sChoiceId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM QUESTION_CHOICE_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND CHOICE_ID=" + sChoiceId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkQuestionStandard(String sAuditId, String sSectionId, String sQuestionId, String sStandardId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM QUESTION_STANDARD_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId + " AND QUESTION_ID=" + sQuestionId + " AND STANDARD_ID=" + sStandardId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkQuestionStandardPreDefined(String sAuditId, String sSectionId, String sQuestionId, String sStandardId, String sValueId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM QUESTION_STANDARD_PREDEFINED_TB WHERE AUDIT_ID=" + sAuditId + " AND SECTION_ID=" + sSectionId +
        //                 " AND QUESTION_ID=" + sQuestionId + " AND STANDARD_ID=" + sStandardId + " AND VALUE_ID=" + sValueId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     public Cursor ChkAttemptAudit(String sAuditId) throws SQLException {
        //         String sql = "SELECT COUNT(*) AS CNT FROM AUDIT_ATTEMPTED_TB WHERE AUDIT_ID=" + sAuditId;
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        
        //     createSection(String sAuditId) {
        //         database.execSQL("INSERT INTO AUDIT_ATTEMPTED_SECTION(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,PARENT_SECTION_ID,SECTION_NAME,SECTION_DESC,SECTION_ORDER,SECTION_PT," +
        //                 "T_QUESTION_COUNT,QUESTION_ANSWERED,S_QUESTION_COUNT,C_QUESTION_COUNT) SELECT B.ATTEMPTED_ID,B.AUDIT_ID,A.SECTION_ID,A.PARENT_SECTION_ID,A.SECTION_NAME," +
        //                 "A.SECTION_DESC,A.SECTION_ORDER,A.SECTION_PT,A.T_QUESTION_COUNT,'' AS QUESTION_ANSWERED,A.S_QUESTION_COUNT,A.C_QUESTION_COUNT FROM SECTION_TB A " +
        //                 "INNER JOIN AUDIT_ATTEMPTED_TB B ON A.AUDIT_ID=B.AUDIT_ID " +
        //                 "LEFT JOIN AUDIT_ATTEMPTED_SECTION C ON B.ATTEMPTED_ID=C.ATTEMPTED_ID AND B.AUDIT_ID=C.AUDIT_ID AND A.SECTION_ID=C.SECTION_ID " +
        //                 "WHERE A.AUDIT_ID=" + sAuditId + " AND C.SECTION_ID IS NULL");
        //     }
        //     createQuestion(String sAuditId) {
        //         database.execSQL("INSERT INTO AUDIT_ATTEMPTED_QUESTIONS(ATTEMPTED_ID,AUDIT_ID,SECTION_ID,QUESTION_ID,QUESTION_TYPE_ID,QUESTION_NAME,QUESTION_TYPE,QUESTION_ORDER,"+
        //                 "IS_CRITICAL,QUESTION_MARKS,MARKS_SCORED,QUESTION_STATUS,QUESTION_COMMENT,IMAGE_NAME,IS_INCLUDED,IMAGE_PUSHED) SELECT B.ATTEMPTED_ID,B.AUDIT_ID,A.SECTION_ID,"+
        //                 "A.QUESTION_ID,A.QUESTION_TYPE_ID,A.QUESTION_NAME,A.QUESTION_TYPE,A.QUESTION_ORDER,A.IS_CRITICAL,A.QUESTION_MARKS,0 AS MARKS_SCORED,"+
        //                 "'Open' AS QUESTION_STATUS,'' AS QUESTION_COMMENT,'' AS IMAGE_NAME,'Yes' AS IS_INCLUDED,'Yes' AS IMAGE_PUSHED FROM QUESTION_TB A "+
        //                 "INNER JOIN AUDIT_ATTEMPTED_TB B ON A.AUDIT_ID=B.AUDIT_ID "+
        //                 "LEFT JOIN AUDIT_ATTEMPTED_QUESTIONS C ON B.ATTEMPTED_ID=C.ATTEMPTED_ID AND B.AUDIT_ID=C.AUDIT_ID AND A.SECTION_ID=C.SECTION_ID AND A.QUESTION_ID=C.QUESTION_ID "+
        //                 "WHERE A.AUDIT_ID="+sAuditId+" AND C.QUESTION_ID IS NULL");
        //     }
        //     public Cursor ValidateUser(String sUserId,String sPassword) {
        //         String sql = "SELECT COUNT(*) AS CNT FROM USER_TB WHERE EMP_ID='"+sUserId+"' AND PASSWORD='"+sPassword+"'";
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        //     public Cursor GetUsrDetails(String sUserId,String sPassword) {
        //         String sql = "SELECT * FROM USER_TB WHERE EMP_ID='"+sUserId+"' AND PASSWORD='"+sPassword+"'";
        //         Cursor mCursor = database.rawQuery(sql, null);
        //         if (mCursor != null) {
        //             mCursor.moveToFirst();
        //         }
        //         return mCursor;
        //     }
        // }
        

}