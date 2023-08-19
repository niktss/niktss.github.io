---
title: Feedback re:last post
---
In the face of incredible opposition from our better reason, we have decided to open a comment section & article feedback form. Please remain civil, although particularly amusing flame comments may be appreciated and/or published.

<form action="/forms/submit.php">
    <fieldset class="form-control p-3 pb-1">
        <div class="row"> {# want to make 2 column first & last name input #}
            <div class="col-sm">
                <div class="form-floating">
                    <input id="comment_fname" name="fname" type="text" required class="form-control col-xs-12 col-sm-6 mb-1" placeholder="First name"><label for="comment_fname">First name</label>
                </div>
            </div>
            <div class="col-sm">
                <div class="form-floating"> {# not the prettiest, but I'd love to find a better way to do this hypothetical? #}
                    <input id="comment_lname" name="lname" type="text" class="form-control col-xs-12 col-sm-6" placeholder="Last name"><label for="comment_lname">Last name (optional)</label>
                </div>
            </div>
        </div>

        <div class="form-floating">
            <input id="comment_email" name="email" type="email" class="col-xs-12 form-control" placeholder="E-mail address"><label for="comment_email">E-mail address</label>
        </div>
        
        <div class="form-floating">
            <textarea id="comment_content" name="comment_content" required class="col-xs-12 form-control" placeholder="Leave your comment..." style="height: 10em;"></textarea><label for="comment_content">Leave your comment...</label>
        </div>
        
        <div class="form-check">
            <input type="checkbox" required class="form-check-input" id="comment_TOS" name="TOS" value="accepted"><label for="comment_TOS" class="form-check-label mb-3 fw-semibold">By posting this comment, I thereby confirm I accept the Terms & Conditions, and that I have hired a lawyer, and a good one at that, who has successfully managed to explain them to me.</label>
        <div>
        <button class="btn btn-primary" type="submit">Submit</button>

    </fieldset>
</form>