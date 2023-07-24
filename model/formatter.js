sap.ui.define([], function() {
	"use strict";

	return  {
       statusText: function(sValue){
        switch (sValue) {
            case 'R':
                return "Respondido";
            case 'F':    
                return "Fechado";             
            case 'A':
                return "Aberto";
                
        }   
        },
        statusState: function(sValue){
            switch (sValue) {
                case 'R':
                    return "Success";
                case 'F':    
                    return "Error";             
                case 'A':
                    return "Information";
                    
            }    

        },
        statusIcon: function(sValue){
            switch (sValue) {
                case 'R':
                    return "sap-icon://accept"
                case 'F':
                    return "sap-icon://locked";                
                case 'A':
                    return "sap-icon://unlocked";
                    
            }

                    
            }


        

	};
});