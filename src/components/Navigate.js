import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CRules from "./subcontents/C/CRules";
import CLoops from "./subcontents/C/CLoops";
import CVar from "./subcontents/C/CVar";
import CsBasic from "./subcontents/C#/CsBasic";
import CsRules from "./subcontents/C#/CsRules";
import CsVariables from "./subcontents/C#/CsVariables";
import CppBasic from "./subcontents/CPP/CppBasic";
import CppLoops from "./subcontents/CPP/CppLoops";
import CppRules from "./subcontents/CPP/CppRules";
import CssBasic from "./subcontents/CSS/CssBasic";
import CssTags from "./subcontents/CSS/CssTags";
import CssVariables from "./subcontents/CSS/CssVariables";
import Rules from "./subcontents/HTML/rules";
import HtmlSematic from "./subcontents/HTML/htmlsematic";
import JsBasic from "./subcontents/JS/JsBasic";
import JsRules from "./subcontents/JS/JsRules";
import JsTags from "./subcontents/JS/JsTags";
import PhpArrays from "./subcontents/PHP/PhpArrays";
import PhpBasic from "./subcontents/PHP/PhpBasic";
import PhpDb from "./subcontents/PHP/PhpDb";
import SqlBasic from "./subcontents/SQL/SqlBasic";
import SqlCreate from "./subcontents/SQL/SqlCreate";
import SqlInsert from "./subcontents/SQL/SqlInsert";
import Content from "./Content/cnt";

function NavigateTo() {
  return (
    <>
      <Route exact path="/" component={Content} />
      <Route exact path="/rules" component={Rules} />
      <Route exact path="/htmlsematic" component={HtmlSematic} />
      <Route exact path="/cssbasic" component={CssBasic} />
      <Route exact path="/csstags" component={CssTags} />
      <Route exact path="/cssVariables" component={CssVariables} />
      <Route exact path="/jsbasic" component={JsBasic} />
      <Route exact path="/jstags" component={JsTags} />
      <Route exact path="/jsrules" component={JsRules} />
      <Route exact path="/phpbasic" component={PhpBasic} />
      <Route exact path="/phpArrays" component={PhpArrays} />
      <Route exact path="/phpDb" component={PhpDb} />
      <Route exact path="/cppBasic" component={CppBasic} />
      <Route exact path="/cpprules" component={CppRules} />
      <Route exact path="/cppLoops" component={CppLoops} />
      <Route exact path="/c#basic" component={CsBasic} />
      <Route exact path="/c#Rules" component={CsRules} />
      <Route exact path="/c#Variables" component={CsVariables} />
      <Route exact path="/CLoops" component={CLoops} />
      <Route exact path="/CRules" component={CRules} />
      <Route exact path="/CVar" component={CVar} />
      <Route exact path="/SqlCreate" component={SqlCreate} />
      <Route exact path="/SqlBasic" component={SqlBasic} />
      <Route exact path="/SqlInsert" component={SqlInsert} />
    </>
  );
}
export default NavigateTo;
