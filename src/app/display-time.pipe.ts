import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTime'
})
export class DisplayTimePipe implements PipeTransform {

    transform(value: any): number {
        let today:Date = new Date(); //get current date and time
        let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
        var dateDifference =Math.abs(value-todayWithNoTime )// returns value in milliseconds
        const minutesInADay= 86400; //60 seconds*60 minutes in an hour *24 hours

        var dateDifferenceMinutes=dateDifference*0.001; //converts to minutes

        var dateCounter = dateDifferenceMinutes/minutesInADay;


        if (dateCounter >= 1){
            return dateCounter;
        }else{
            return 0;
        }
    }


}
