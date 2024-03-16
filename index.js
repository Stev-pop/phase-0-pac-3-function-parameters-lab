
function introduction (name){
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name = "Stephen", language = "Ember.js") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }

function introductionWithLanguageOptional(name, language = "UserJavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }

  function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }