sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel) {
        "use strict";

        return BaseController.extend("com.prestativ.slc.followup.controller.App", {
            /*==========================================================*/
            /* lifecycle methods                                        */
            /*===========================================================*/    
            onInit: function () {
                let oViewModel,
                    fnSetAppNotBusy,
                    iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

                oViewModel = new JSONModel({
                  busy: false,
                  delay: 0,
                  layout: "OneColumn",
                  previousLayout: " ",
                  actionButtonInfo:{
                    midColumn:{
                      fullScreen: false
                    } 
                  }         
                });

              this.setModel(oViewModel, "appView");

              fnSetAppNotBusy = function() {
                oViewModel.setProperty("/busy", false);
                oViewModel.setProperty("/delay", iOriginalBusyDelay);
              };

              //since then() has no "reject"-path attach to the MetadataFailed-Event to disable the busy indicato
              this.getOwnerComponent().getModel().metadataLoaded().then(fnSetAppNotBusy);
              this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);
            }

            /*===========================================================*/
            /* event handlers                                            */
            /*===========================================================*/ 

            /*===========================================================*/
            /* begin: internal methods                                   */
            /*===========================================================*/ 




        });
    });
