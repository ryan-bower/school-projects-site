/*
  This is the function that creates a div with the relevent title, description, question,
  dropdown, and any pictures included in the json. It is run everytime the user selects an
  option in a dropdown menu, and creates the new div.
  Variable menuName and is the name of the set of data in the JSON file that will be used to
  pull all of the data for the div.
*/
function newMenu(menuName) {

  //dataIndex represents the index of the dataset in the JSON file
  var dataIndex = -1;
  //dataSet represents the current set of data for that div
  var dataSet = null;
  //find menu name's index in the data
  for(var i=0;i<data.length;i++) {
    if (data[i].name == menuName) {
      dataIndex = i;
      dataSet = data[dataIndex];
    }
  }

  //if it is the last choice
  if (menuName.slice(0,3) == "end") {
    showResults(menuName.slice(3));
    return;
  }

  //if the choice was default or not in the data
  if(dataIndex == -1) {
    //do nothing
    return;
  }

  //create new div for the option
  var optDiv = document.createElement("div");
  optDiv.setAttribute("class", "option");
  optDiv.setAttribute("id", menuName);

  //create images
  var picsDiv = createPics(dataIndex);
  optDiv.appendChild(picsDiv);

  //create title, description, and question.
  var title = createElementWithText("h2", dataSet.title);
  optDiv.appendChild(title);
  var desc = createElementWithText("p", dataSet.desc);
  optDiv.appendChild(desc);
  var question = createElementWithText("h3", dataSet.question);
  question.setAttribute("class", "question");
  optDiv.appendChild(question);

  //create dropdown
  var dropdown = createDropdown(dataIndex);
  dropdown.onchange = function() {choose(menuName, dropdown.value)};
  optDiv.appendChild(dropdown);

  //add the new div to the page
  document.getElementById('content').appendChild(optDiv);
}

/*
	Called when there is an onchange trigger for any of the dropdown menu's. It deletes
	all divs below it, and calls newMenu() to make the next div depending on the user's choice.
	Variable myName is the name of the div that was changed. The loop keeps removing the last child
	until this div remains. Variable choice is the value of the selected dropdown, and is used
	to determine the information that will be displayed in the next div.
*/
function choose(myName, choice) {
  //thisDiv is used to reference which div's dropdown was changed
  thisDiv = document.getElementById(myName);

  //keeps removing the last child div until it gets to the current one
  while(thisDiv != thisDiv.parentNode.lastChild) {
    thisDiv.parentNode.removeChild(thisDiv.parentNode.lastChild);
  }

  //creates a new div with all of the information form the choice made in the dropdown
  newMenu(choice);
}

/*
	Very versatile function that takes an element type and text string, creates that type of element,
	creates a text node with the correct string, and combines them returning an element object.
	Takes variable type that represents the desired element type, and variable text that represents
	the desired text string for that element.
*/
function createElementWithText(type, text) {
  //creates a new element of the passed in type
  var element = document.createElement(type);
  //if the text is valid, create a text node and add it to the element
  if (text != undefined) {
    var eleText = document.createTextNode(text);
    element.appendChild(eleText);
  }

  return element;
}

/*
	Creates a new dropdown element and loops through all the options in the data, adding them
	one by one. It calls createOption to make each option element, and adds them to the dropdown.
	Takes variable dataIndex that indicates which set in the data the pics belong to.
*/
function createDropdown(dataIndex) {
  //creates the a dropdown element
  var dropdown = document.createElement("select");
  dropdown.setAttribute("class", "input");

  //creates the default option prompting users to select a choice
  var defaultOption = createElementWithText("option", "-- Make a Choice --");
  defaultOption.setAttribute("value", "default");
  dropdown.appendChild(defaultOption);

  //adds each option from the options array in data
  for (var i=0; i<data[dataIndex].options.length;i++) {
	  //creates a new option using the data's name and text
    var option = createElementWithText("option", data[dataIndex].options[i].text);
	option.setAttribute("value", data[dataIndex].options[i].name);
    dropdown.appendChild(option);
  }

  return dropdown;
}

/*
	Creates all of the images at a given index and adds them a div that it then returns.
	Takes variable dataIndex that indicates which set in the data the pics belong to.
*/
function createPics(dataIndex) {
  //creates a div to add the pictures to
  var picsDiv = document.createElement("div");
  picsDiv.setAttribute("class", "pics");

  //adds each option from the options array in data
  for (var i=0; i<data[dataIndex].options.length;i++) {
    var pic = document.createElement("img");
    pic.setAttribute("src", data[dataIndex].options[i].pic);
    //if there is a link for a picture
    if (data[dataIndex].options[i].pic != undefined) {
      picsDiv.appendChild(pic);
    }
  }

  return picsDiv;
}

/*
	Displays the choices that the user has made, and what the ending to their story is.
	Variable endIndex that indicates the ending number that the user has earned. Variable name
  represents the name of the adventure. If left blank, the default name is used.
*/
function showResults(endIndex) {
  //if the name is not given, set a default one.
  var name = localStorage.getItem("name");
  /*
    The following would be used for IE version 7, currently unsupported
    var name = document.cookie;
  */
  if (name == undefined || name == "") {
    name = "Adventurer";
  }

  //create div to hold results
  var resultsDiv = document.createElement("div");

  //returns an array of all of the divs
  divs = document.getElementsByClassName("option");

  //loops through each of the divs to gather information from each
  for (var i=0; i<divs.length; i++) {

    //used to reference the current dropdown
    var dropdown = divs[i].getElementsByClassName("input")[0]
    var para = document.createElement("p");
    var selectedIndex = dropdown.selectedIndex;

    //if the first div, say which adventure they chose.
    if (i == 0) {
      //create a paragraph saying "you chose the _______ adventure"
      addResultsParagraph(para, name + ", you chose the ", dropdown.options[selectedIndex].text, " adventure.");

      //add the paragraph to the div
      resultsDiv.appendChild(para);
    }
    //if any of the divs after the first.
    else {
      //gets the question from that paragraph
      question = divs[i].getElementsByClassName("question")[0].textContent;
      addResultsParagraph(para, name + ', when you were faced with the question "', question, '"');
      addResultsParagraph(para, ' you went with "', dropdown.options[selectedIndex].text, '".')
      resultsDiv.appendChild(para);
    }
  }

  //create the ending type and paragraph at the end
  var ending = data[data.length-1].endings[endIndex];

  var endingType = createElementWithText("h2", ending.type + " Ending.");
  endingType.setAttribute("class", "ending");
  resultsDiv.appendChild(endingType);

  var endingText = createElementWithText("p", ending.text);
  endingText.setAttribute("class", "ending");
  resultsDiv.appendChild(endingText);

  //create a reset button
  var resetBtn = createElementWithText("button", "Start Over");
  resetBtn.setAttribute("class", "input");
  //reset the input
  dropdown = document.getElementsByClassName("option")[0].getElementsByClassName("input")[0];
  //onclick the first dropdown is reset and the below divs are removed.
  resetBtn.onclick = function() {dropdown.selectedIndex = 0; choose("start", "default");};
  resultsDiv.appendChild(resetBtn);

  //add the form asking for the name and age
  var form = createForm(resultsDiv, endIndex);

  //return the results div
  resultsDiv.setAttribute("class", "option");
  document.getElementById('content').appendChild(resultsDiv);
}

/*
	Creates a results sentance that sums up the choices the user has made in the story.
	Variable div is the div that the sentance is a part of. Variables ftext and ltext are
	the first and last pieces of text in the sentence. Variable mtext is either the question
	that the user was asked, or the user's choice to the decision, and is bolded for easy reading.
*/
function addResultsParagraph(div, ftext, mtext, ltext) {
  //make a text node for each sentance and add it to the div
  var paraStart = document.createTextNode(ftext);
  div.appendChild(paraStart);

  /*a span is bad for the middle text, which is the question/choice that the user is
    beingasked/answering. It allows it to be styled bold in the CSS so it stands out.*/
  var paraAdventure = createElementWithText("span", mtext);
  paraAdventure.setAttribute("class", "bold");
  div.appendChild(paraAdventure);

  var paraEnd = document.createTextNode(ltext);
  div.appendChild(paraEnd);
}

/*
  Creates the form at the bottom of the page that asks the user to enter their name.
  Variable div is the div that the form is to be added to. Once all of the elements in
  the form are made, the form is added to the div.
  Variable div is used to add the form elements to the results div. Variable endIndex
  is passed on to changeName() as an action of the submit button in the form.
*/
function createForm(div, endIndex) {
  //create the form
  var form = document.createElement("form");
  //validates the form and calls the changeName() function if it is valid.
  form.onsubmit = function(){
    if (document.getElementById("name").value == "") {
        alert("You must enter a name.");
        return false;
    } else {changeName(div, endIndex);}};

  //create the name h2 label
  var nameDiv = document.createElement("div");
  var nameText = createElementWithText("h2", "Name: ");
  nameDiv.appendChild(nameText);
  //create the textbox for the name
  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("id", "name");
  nameDiv.appendChild(name);
  form.appendChild(nameDiv);
  //create the submit button
  var submitBtn = createElementWithText("button", "Submit");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("class", "input");
  form.appendChild(submitBtn);

  //add the form to the div that was passed in
  div.appendChild(form);
}

/*
  Removes the results div, and remakes it using the newly set name that is saved to local storage.
  When the page is refereshed, the name will still be remembered.
  Variable div is referring to the results div, and is used to remove it. Variable endIndex
  is used to call showResults() to remake the results div.
*/
function changeName(div, endIndex) {
  //store new name
  localStorage.setItem("name", document.getElementById("name").value);
  document.cookie = "name="+document.getElementById("name").value;
  //remove old results div
  div.parentNode.removeChild(div.parentNode.lastChild);
  //create updated results div
  showResults(endIndex);
}
