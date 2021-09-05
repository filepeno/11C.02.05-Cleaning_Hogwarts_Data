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
    const firstName = getFirstName(student.fullname);
    const middleName = findMiddleOrNickName(student.fullname);
    // console.log(firstName);
    // console.log(middleName);
  });
  const student = Object.create(Student);
}

function findMiddleOrNickName(fullname) {
  const trimmedName = fullname.trim().toLowerCase();
  const nameCount = trimmedName.split(" ");
  console.log(nameCount.length);
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
  console.log(mid);
  //   const middleNameCaps = trimmedName[0].toUpperCase() + trimmedName.substring(1, firsNameEnd);
  //   return middleNameCaps;
}
