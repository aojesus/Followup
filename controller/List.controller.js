sap.ui.define([
	"./BaseController",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(
	BaseController,
	Formatter,
	Filter,
	FilterOperator
) {
	"use strict";

	return BaseController.extend("com.prestativ.slc.followup.controller.List", {
       
          formatter: Formatter, 


        /*===========================================================*/
        /* lifecycle methods                                         */
        /*===========================================================*/    
        onInit: function(){
            this.getRouter().getRoute("list").attachPatternMatched(this._onMasterMatched, this);
        },
        /*===========================================================*/
        /* event handlers                                            */
        /*===========================================================*/ 
         
        onBeforeRebinTableFollowup: function(oEvent){
            let oFilters = oEvent.getParameter("bindingParams").filters;

            oFilters.push(new Filter("EMailAddress", FilterOperator.EQ, this._Email));

        },    

        /*===========================================================*/
        /* begin: internal methods                                   */
        /*===========================================================*/ 

        _onMasterMatched: function(oEvent)  {
            this._Email = "lenon.soares@prestativ.com.br";

            try {
                this._Email = sap.ushell.Container.getService("UserInfo").getEmail();
            } catch (error) {
                
            }

        }
	});
});