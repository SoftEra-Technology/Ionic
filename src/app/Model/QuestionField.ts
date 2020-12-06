import {FieldValue} from './FieldValue';
import {FieldChoice} from './FieldChoice'
export class QuestionField
{

    FieldId: String;
    FieldName: String;
    FieldType: String;
    IsKey: String;
    IsHdr: String;
    IsScorable: String;
    HdrId: String;
    ChildArray: QuestionField[];
    FieldValues: FieldValue[];
    FieldChoice: FieldChoice[];

}