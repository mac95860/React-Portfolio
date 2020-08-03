import React from "react";

function ContactCard() {
    return (
        <>
            <div class="container d-flex justify-content-around align-center">
                <div class="card align-middle w-75">
                    <div class="card-header shadow">
                        Contact Me
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Name:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Email:</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
                        </div>
                        <label for="exampleFormControlTextarea1" class="font-weight-bold">Leave a Comment</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a comment and I'll respond as soon as possible"></textarea>

                        <button type="button" class="btn btn-primary btn-lg">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactCard;