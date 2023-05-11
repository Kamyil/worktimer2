export interface ICalendarState {
  picked_calendar_date: Date;
}

export interface IEmployeesState {
  employees: IEmployee[];
  total_month_normal_hours: number;
  total_month_acord_hours: number;

  employee_info_modal: {
    isOpen: boolean;
    employeeIdToShowDetailedInfo: number;
  };

  employees_manager: {
    isOpen: boolean;
  };
}

export interface IFormsState {
  addWorkRecordFormButtonIsVisible: boolean;
  addWorkRecordFormRow: {
    workRecordId: number;
    employeeId: number;
    isVisible: boolean;
    firstName: string;
    lastName: string;
    normalHours: number;
    acordHours: number;
    holidayHours: number;
    workDescription: string;
  };

  addEmployeeFormButtonIsVisible: boolean;
  addEmployeeFormRow: {
    isVisible: boolean;
    first_name: string;
    last_name: string;
  };
}

export interface IAppInitialState {
  employees: IEmployeesState;
  calendar: ICalendarState;
  forms: IFormsState;
}

/**
 * Defines how much bonus Employee wil receive for specific month and year
 */
export interface IPayBonus {
  [key: string]: number;
  // ^ Date ex. '01-2020'
}

/**
 * Defines how much money will employee loose due to his possible fault
 */
export interface IPayDock {
  [key: string]: number;
  // ^ Date ex. '01-2020'
}

export interface IEmployee {
  id: string;
  first_name: string;
  last_name: string;
  total_week_normal_hours: number;
  total_week_acord_hours: number;
  hourly_rate: number;
  quick_notes_about_this_employee: string;
  acord_pay: null | number;

  /**
   * Defines how much bonus Employee wil receive in specific months and years
   */
  payBonus: Map<string, number>;

  /**
   * Defines how much money will employee loose due to his possible fault
   */
  payDock: Map<string, number>;
  work_records: Map<string, IWorkRecord>;
}

export interface IWorkRecord {
  work_record_id: number;
  employee_id: string;
  date: string;
  normal_hours: number;
  acord_hours: number;
  holiday_hours: number;
  work_description: string;
}

export {};
