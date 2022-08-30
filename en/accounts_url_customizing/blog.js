jQuery(document).ready(function($){
    console.log('jfjfjf')
    let title = '';
    let blogContent = [
        {
            tag:'p',
            text:`
            django provide us with a most of built in stuffs that release us from pain of repeating the process of writting
            all this stuffs all over again .<br>
            one of the most important one is the auth and authentication process and forms<br>
            the built in django authentification system provide us with the most views and actions we might need during 
            building our apps that we can use directly or customizing them in most approperiated ways that works for us 
            `,
        },
        {
            tag:'p',
            text:`
            you can find the source code of this article in my <a href='https://github.com/amir-mohammad-HP/django4-SampleCode/tree/main/accounts%20URL%20customizing'> github page </a>
            `,
        },
        {
            tag:'p',
            text:`
            there is two approach to use this built in feature that we ganna explain but you can use it in a way you are most comfortable with (there is no specific way actually ... when you learned do it as you like)
            `,
        },
        {
            tag:'h4',
            text:'Start Project',
        },
        {
            tag:'p',
            text:'first is first ... let\'s start the project',
        },
        {
            tag:'p',
            text:'i assume you\'re familiar with django and start the project',
        },
        {
            tag:'code',
            text:`
    $ django-admin startproject accounts_actions .
    $ python3 manage.py startapp accounts
`,
        },
        {
            tag:'code',
            text:`
    # ./accounts_actions/settings.py
    INSTALLED_APPS = [
    ...,
    "accounts.apps.AccountsConfig",
    ]
            `,
        },
        {
            tag:'p',
            text:`
            to get configure this URLs in to our projects, 
            we should include the in the "./accounts_actions/urls.py" 
            but we include them in a standalone app for more integration .`,
        },
    ];

    blogContent.forEach(function(obj){
        
            if (obj.tag === 'code'){
                $('#article-content').append(
`
<pre class="code-bg"><code id="python_code" class="cm-s-default"> `+ obj.text +`</code></pre>
`
                    
            )}else{
                $('#article-content').append(
`
<`+ obj.tag +`> `+ obj.text +`</`+ obj.tag +`>
`
            )};
    });
    
});