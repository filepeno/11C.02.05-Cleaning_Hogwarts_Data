"use strict";

const Student = {
  firstName: "",
  lastName: "",
  middleName: "",
  nickName: "",
  image: "",
  house: "",
};

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("ready");
  loadJSON();
}

function loadJSON() {
  fetch("students.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(students) {
  console.log("prepareObjects()");
  students.forEach((student) => {
    // console.log(student);
    const studentObj = Object.create(Student);
    studentObj.firstName = getFirstName(student.fullname);
    // const middleName = findMiddleOrNickName(student.fullname);
    studentObj.nickName = getNickName(student.fullname);
    // console.log(firstName);
    // console.log(middleName);
    console.log(studentObj);
  });
}

//returns a nickname if exists
function getNickName(fullname) {
  if (fullname.includes('"')) {
    const nickNameTrim = fullname.substring(fullname.indexOf('"'), fullname.lastIndexOf('"') + 1);
    const nickNameCaps = '"' + nickNameTrim[1].toUpperCase() + nickNameTrim.substring(2).toLowerCase();
    return nickNameCaps;
  } else {
    return null;
  }
}

function findMiddleOrNickName(fullname) {
  const trimmedName = fullname.trim().toLowerCase();
  const nameCount = trimmedName.split(" ");
  // console.log(nameCount.length);
  if (nameCount.length > 2) {
    const middleNameOrNickName = nameCount[1];
    getMiddleNameOrNickName(middleNameOrNickName);
  } else {
    return null;
  }
}

function getFirstName(fullname) {
  const trimmedName = fullname.trim().toLowerCase();
  const firsNameEnd = trimmedName.indexOf(" ");
  const firstNameCaps = trimmedName[0].toUpperCase() + trimmedName.substring(1, firsNameEnd);
  return firstNameCaps;
}

function getMiddleNameOrNickName(mid) {
  if (mid.startsWith(`"`) === true) {
    const nickNameCaps = '"' + mid[1].toUpperCase() + mid.substring(2);
    console.log(nickNameCaps);
  }
  //   const middleNameCaps = trimmedName[0].toUpperCase() + trimmedName.substring(1, firsNameEnd);
  //   return middleNameCaps;
}
