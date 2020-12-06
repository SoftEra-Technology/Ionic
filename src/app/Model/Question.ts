import {Standard} from './Standard';
import {ChoiceOption} from './ChoiceOption';
import {ChoiceInputOption} from './ChoiceInputOption';
import {MultipleChoiceOption} from './MultipleChoiceOption'
import {RangeOption} from './RangeOption';
import {YesNoOption} from './YesNoOption';
import {QuestionField} from './QuestionField';

export class Question
{
    QuestionId: Number;
    QuestionName: String;
    QuestionOrder: Number;
    QuestionPoint: Number;
    QuestionTypeId: Number;
    QuestionType: String;
    IsNC: String;
    Standard: Standard;
    Choice: ChoiceOption[];
    ChoiceInput: ChoiceInputOption[];
    MultipleChoice: MultipleChoiceOption[];
    Range: RangeOption [];
    YesNo: YesNoOption[];
    Fields: QuestionField[];
    MultipleFields: QuestionField[];
}