var n = 100;
var operator = ['+','-','']
var satisfied = []
// var str = ''

operator.forEach(function(o){
  // console.log(o);
    var str = '1'+o;
  operator.forEach(function(o){
    // console.log(o);

    str += '2'+o;

    operator.forEach(function(o){
      str += '3'+o;

      operator.forEach(function(o){
        str += '4'+o;

        operator.forEach(function(o){
          str += '5'+o;

          operator.forEach(function(o){
            str += '6'+o;

            operator.forEach(function(o){
              str += '7'+o;

              operator.forEach(function(o){
                str += '8'+o+'9';
                if(eval(str) == n){
                  // console.log('pushed:'+str);
                  satisfied.push(str);
                }

                str = str.split('8')[0];
              })

              str = str.split('7')[0];

            })
            str = str.split('6')[0];

          })
          str = str.split('5')[0];

        })
        str = str.split('4')[0];

      })
      str = str.split('3')[0];

    })
    str = str.split('2')[0];

  })
str = '';
})


console.log(satisfied);
