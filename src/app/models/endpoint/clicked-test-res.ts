import {Parameter, AppEndPoint} from './endpoint.model';
import { AnimationStyleMetadata } from '@angular/animations';

export class AppClickedTestRes {
  public static MOCK_DATA = {
    selectedResponse: 'application/JSON',
    parameterFields: {
      name: 'page_number',
      httpPart: 'query',
      type: 'integer',
      required: true,
      desc: 'The page number to get',
      value: '20'
    }
  };

  public selectedResponse?: any;
  public selectedRequest?: any;
  public selectedScheme?: string;
  public parameterFields?: any;
  public endPointData?: AppEndPoint;

  constructor(endPointData: AppEndPoint, selectedResponse, selectedRequest, parameterFields, selectedScheme?: string) {
    this.selectedResponse = selectedResponse;
    this.parameterFields = parameterFields;
    this.endPointData = endPointData;
    this.selectedRequest = selectedRequest;
    this.selectedScheme = selectedScheme;
  }
}




