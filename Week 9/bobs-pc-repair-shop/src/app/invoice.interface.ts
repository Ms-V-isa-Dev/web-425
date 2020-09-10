/**
 * Title: Assignment 9.3
 * Author: Verlee Washington
 * Date: 09/8/2020
 * Description: invoice interface
 */

import { IRepairService } from './repair-service.interface';

export interface Invoice {
  lineItems: Array<IRepairService>;
  partsAmount: number;
  laborAmount: number;
  orderDate: string;
}
