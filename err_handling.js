function validateName(name) {
    try {
        if(name.Match(/[\$\#]/)) {
            console.log("Invalid input");
            // return false;
            throw new Error("Name should not contain $ or #");
        }
        else {
            console.log("Valid input");
            return true;
        }
    }
    catch (error) {
        // console.log("Error message: "+error.message);
        console.log(error.message);
        // if (error instanceof TypeError) {
        //     console.log("Type Error occured");
        // }
        // else if (error instanceof SyntaxError) {
        //     console.log("Syntax Error occured");
        // }
        // else if (error instanceof RangeError) {
        //     console.log("Range Error occured");
        // }
        // else {
        //     console.log("Some other Error occured");
        // }
    }
    finally {
        console.log("Cleaning up resources");
    }
}

function validate() {
    validateName("Hello$");
}

validate();