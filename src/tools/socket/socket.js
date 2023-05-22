const {io} = require('socket.io-client')


export class socket{
    constructor(serverOrClient,serverLink){
        this.socket = null
        if(serverOrClient === "client"){
            this.socket = io(serverLink)
        }
    }
    emitSignal(signalName,data){
        this.socket.emit(signalName,data)
    }
    establishListener(signalName,func){
        this.socket.on(signalName,func)
    }
    getId(){
        return this.socket.id
    }   
}

// const x = [{    
//     "grouping": "authentication",    
//     "functionname": "loginUser",    
//     "class": "AuthController",    
//     "file": "auth.js",   
//      "input": "email, password",    
//      "output": "token",    
//      "app": "myapp"  
// }]


// const instance = new socket('client','http://localhost:3001')
// instance.testServerFunction('executed',x)
// instance.testOneEmitOneResponse('executed','executed and stored',x)

