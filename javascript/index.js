// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));


// Iteration 1 - using callbacks
const callBack1 = (theCallBack) => {
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  setTimeout(() => {
    theCallBack();
  }, 1000);
}

const callBack2 = (theCallBack) => {
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  setTimeout(() => {
    theCallBack();
  }, 1000);

}

const callBack3 = (theCallBack) => {
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  setTimeout(() => {
    theCallBack();
  }, 1000);
}

const callBack4 = (theCallBack) => {
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  setTimeout(() => {
    theCallBack();
  }, 1000);
}

const callBack5 = (theCallBack) => {
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  }, (error) => console.log(error));
  setTimeout(() => {
    theCallBack();
  }, 1000);
}

const callBack6 = () => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
}

setTimeout(() => {
  callBack1(() => callBack2(() => callBack3(() => callBack4(() => callBack5(() => callBack6())))))
}, 500);

// Iteration 2 - using promises

function myPromise(param) {
    return new Promise((resolve, reject) => {
        if(param === 0) {
            return resolve(getInstruction("steak", 0));;
        }if(param === 1) {
          return resolve(getInstruction("steak", 1));;
        }if(param === 2) {
          return resolve(getInstruction("steak", 2));;
        }if(param === 3) {
          return resolve(getInstruction("steak", 3));;
        }if(param === 4) {
          return resolve(getInstruction("steak", 4));;
        }if(param === 5) {
          return resolve(getInstruction("steak", 5));; 
        }else {
            return reject({status: 'Failure', message: 'Something went wrong!!'})
        }
    })
}

myPromise(0).then(res1 => {
  myPromise(1).then((res2) => {
    myPromise(2).then((res3) =>{
      document.querySelector("#steak").innerHTML += `<li>${res1}</li>`;
      document.querySelector("#steak").innerHTML += `<li>${res2}</li>`;
      document.querySelector("#steak").innerHTML += `<li>${res3}</li>`;
    })
  }).catch(err =>{})
}).catch(err =>{})

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...