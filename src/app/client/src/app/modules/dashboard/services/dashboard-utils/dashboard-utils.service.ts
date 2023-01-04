import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
// import 'moment-duration-format';
import 'dayjs/plugin/duration';

/**
 * Dashboard utils service
 *
 * It contains all dashboard related common function
 */
@Injectable()

/**
 * @class DashboardUtilsService
 */
export class DashboardUtilsService {

  /**
   * Default method of DashboardUtilsService class
   */
  constructor() {
  }


  /**
   * Convert second(s) into min(s) or hr(s)
   *
   * @param {any} numericData dashboard snapshot numeric data
   */
  secondToMinConversion(numericData: any) {
    numericData.value = +numericData.value;
    const dayjsFormat: any = dayjs.duration(numericData.value, 'seconds');
    if (numericData.value < 60) {
      numericData.value = dayjsFormat.format('s [Second]');
    } else if (numericData.value >= 60 && numericData.value <= 3600) {
      numericData.value = dayjsFormat.format('m [minute]');
    } else if (numericData.value >= 3600) {
      numericData.value = dayjsFormat.format('h [Hour]');
    } else {
      return numericData;
    }

    return numericData;
  }
}
