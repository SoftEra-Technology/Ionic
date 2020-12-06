import {Section} from './Section'

export class Audit
{
    AuditMode: String;
    AuditId: Number;
    AuditName: String;
    BuId: Number;
    BuName: String;
    AuditStage: String;
    AuditTypeId: Number;
    AuditType: String;
    AuditPoints: Number;
    QuestionCount: Number;
    AuditDesc: String;
    AuditStatus: String;
    Sections: Section[];


}