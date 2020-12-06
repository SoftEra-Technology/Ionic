import {Question} from './Question'

export class Section
{


   SectionId: Number;
    SectionName: String;
   SectionDesc:  string;
     SectionOrder: Number;
     SectionPoint: Number;
     QuestionCount: Number;
     TQuestionCount: Number;
    CQuestionCount: Number;
     ParentSectionId: Number;
     ParentSection: string;
    Questions: Question [];
}