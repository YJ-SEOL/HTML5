// 선생님 기출 //
// 연습문제 1
// 두 수 a, b가 입력
// a가 b보다 크면 "a가 큼"
// a와 b가 같으면 "a와 b가 같음"
// b가 a보다 크면 "b가 큼"을 출력하세요.
    // window.onload = function() {
    //         let num1 = prompt("첫번째 숫자를 입력하세요.")
    //         let num2 = prompt("두번째 숫자를 입력하세요.")

    //         if(num1 > num2) {
    //             alert(num1 + "이/가 큼.")
    //         }
    //         else if(num1 == num2) {
    //             alert(num1 + "와 " + num2 + "가 같음.")
    //         }
    //         else {
    //             alert(num2 + "이/가 큼 ")
    //         }
    // }

// 연습문제 2
// 입력값이 주어지면
// 1이면 도를 출력
// 2이면 개를 출력
// 3이면 걸을 출력
// 4이면 윷을 출력
// 다른 아무 숫자가 입력되면 윷를 출력하세요.
    // window.onload = function() {
    //     function X(){
    //         let num = prompt("숫자를 입력하세요.");

    //         var arr = ["도", "개", "걸", "윷"];
                
    //             for(i = 1; i<5; i++) {
    //                 if(num == i){
    //                     return arr[i-1];
    //                 } 


    //             } 
    //         return "모";
    //     }       
    //     alert(X());
    // }

// 연습문제 3.
// 입력한 개수만큼 별(*)을 출력하세요.
        // let Star = prompt("숫자를 입력하세요.");
        // let result = " ";

        // for(let i = 0; i<Star; i++) {
        //     result = result +"*";
        // }
        // document.write(result);




// 연습문제 4.
// n이 입력되면 다음과 같은 삼각형을 출력하세요.
// *
// **
// ***
// ****
// *****
    // let Star = prompt("숫자를 입력하세요.");
    // let result = " ";

    // for(let i = 0; i<Star; i++) {
    //     result = result +"*";
    //     document.write(result+"<br>");
    // }

// 책 p331 11번
// 센티미터 인치, 피트 변환
    // let num = Number(prompt("숫자를 입력해주세요"));

    // let inch = num/2.54;
    // let feet = inch/12;

    // document.write("inch = " + inch.toFixed(2));
    // document.write("<br>");
    // document.write("feet = " + feet.toFixed(2));

// 12. 원기둥 및면의 반지름과 높이를 입력받아 부피를 계산하는 프로그램 작성.
    // let r = Number(prompt("반지름을 입력하세요."))    
    // let h = Number(prompt("높이를 입력하세요."))    

    // let result = (r * r * 3.14) * h ;
    // document.write("result = " + result.toFixed(2));

// 13. 네 자리 정수를 입력받아 천, 백, 십, 일의 자리로 분리해 출력하는 프로그램을 작성하시오.
// Hint: 천의 자리는 parseInt(num/1000), 백의 자리는 parseInt(num%1000/100)으로 구살 수 있음.
//     var input = pormpt("입력해주세요", "입력")
    // let num = Number(prompt("숫자를 입력하세요"));
    
    // let 천 = parseInt(num/1000);
    // let 백 = parseInt(num%1000/100);
    // let 십 = parseInt(num%100/10);
    // let 일 = parseInt(num%10/1);

    // document.write(천 + " " + 백 + " " + 십 + " " + 일);

// 14. 사용자에게 태어난 연도를 입력받아 그 해의 디를 출력하는 프로그램을 작성
    // let year = Number(prompt("연도를 입력하세요"))    ;
    
    // let arr = [
    //     "원숭이 띠",
    //     "닭 띠",
    //     "개 띠",
    //     "돼지 띠",
    //     "쥐 띠",
    //     "소 띠",
    //     "범 띠",
    //     "토끼 띠",
    //     "용 띠",
    //     "뱀 띠",
    //     "말 띠",
    //     "양 띠"
    //     ]
    // let exp = year % 12;

    // for (let i=0; i < 12; i++) {
    //     if(exp == i) {
    //         alert(arr[i]);
    //         break;
    //     }
    // }

// 15. 반복문을 사용해 
// *
// **
// ***
// ****
// *****
// 위와 같은 패턴을 출력하는 프로그램 작성

// 16. 매개변수 n을 입력받아 n! 반환 함수 작성
    function fac(num){
        let result = 1;

        for(let i=1; i<=num; i++) {
            result *= i;
        }
        return result;
    }
    let inp_num = Number(prompt("숫자를 입력해 주세요."));
    alert(fac(inp_num));