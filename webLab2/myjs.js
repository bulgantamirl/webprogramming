var calendar2021 = {
    jan: {1: "Сайхан амарна"}, 
    feb: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
    mar: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
    apr: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
    may: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
    jun: {6: "Жавхлан багшийн төрсөн өдөр"},  
    jul: {4: "Хичээл амарсаан ураа"}, 
    aug: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
    sep: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
    oct: {13: "Сур сур бас дахин сур"}, 
    nov: {2: "Сурсаар л бай"}, 
    dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} 
    }
        var monthName = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
        var dayCounter = 4;
        var htmlDisplay='';
        var htmlCreator = '';
        for(var months=1; months<=12; months++) {
            calendarPrint(months);
            function calendarPrint(month) {         
                var eventMonth = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
                var prevMonth = new Date(2021, month-1, 0);
                var current = new Date(2021, month, 0);
                var nextMonth = new Date(2021, month+1, 0);
                    htmlCreator+='<div class="calendar"><h2 class="months">';
                    htmlCreator+=monthName[month-1];
                    htmlCreator+= '</h2>';
                    
                
                htmlCreator+= '<table class="main">';
                htmlCreator+= '<tr class="weekdays"><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td id="weekend">Sat</td><td id="weekend">Sun</td></tr><tr>';
                
                if(dayCounter!=7) {
                for(var i=(prevMonth.getDate()-dayCounter+1);i<=prevMonth.getDate();i++) {
                    htmlCreator += '<td class="blur days">';
                    htmlCreator += i;
                    htmlCreator += '</td>'; 
                }
                }
                for(var i=1; i<=current.getDate(); i++){
                    if(dayCounter%7==0) {
                        htmlCreator+='</tr><tr>';
                            dayCounter=0;
                    }
                    dayCounter++;
                    if(calendar2021[eventMonth[month-1]][i]) {
                        htmlCreator +='<td class="event days" onclick="ifEvent('+month +','+i+')">'+i+'</td>';
                    } else {
                        htmlCreator += '<td class="days" onclick="ifEvent('+month +','+i+')">'+i+'</td>';
                    }
                }
                
                for(var i=1; i<=(7-dayCounter); i++) {
                    htmlCreator += '<td class="blur days">';
                    htmlCreator += i;
                    htmlCreator += '</td>';
                    
                } 
                

                htmlCreator += '</tr></table></div>' 

                
            }
            
            function ifEvent(sar, day) {
                var monthName = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
                var eventMonth = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
                htmlDisplay+=' '+day +'. ';
                var eventWord=calendar2021[eventMonth[sar-1]][day];
                if(eventWord==null) 
                htmlDisplay='<label>'+monthName[sar-1]+' '+day +'. '+'Ямар нэгэн event-гүй өдөр.'+'</label>';
                else
                htmlDisplay='<label style="color: goldenrod">'+monthName[sar-1]+' '+day +'. '+eventWord+'</label>';
                document.getElementById('display').innerHTML= htmlDisplay;
            }
        }
        document.querySelector('.main').innerHTML = htmlCreator;