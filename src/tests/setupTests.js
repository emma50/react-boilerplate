import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'   // Add Enzyme adapter for version 16 of react 
import DotEnv from "dotenv"

// Configure Enzyme to add support for version 16 of react
Enzyme.configure({   
    adapter: new Adapter()  
})

// Configure environment for test
DotEnv.config({path: ".env.test"})