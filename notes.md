# Dev notes

## TO DO

### myEvents Page

Goal is to create a page where I can list personal events and have a system inwhich users can easily RSVP to said event
Currently would like to create a page for my 30th birthday party
Requirements:

- RSVP
- Check Status. AKA have they been accepted?
- Ability to edit ones RSVP
- RSVP should have a group function to allow users to group with other users. The group should have a "leader" in which I could easily contact about group requirements

- Git branch = page_myEvents
-

## HTML

' = &apos;

## Icons

Style fa6
ICONS [https://react-icons.github.io/react-icons/search/#q=fagithub]

## TailwindCSS

https://www.youtube.com/watch?v=guh9qzxkb1o -> setting class name variables 4:44
example:

    const colorVariants = {
        blue: 'bg-blue-500 hover:bg-blue-500 etc etc'
        red: 'etc etc'
    }

    <div className={`${colorVarient['blue']}}></div>

Breakpoints:

    Can have a rang. Example:
    className="md:max-xl:flex"

Need to start using "Container" class!!!

## Alerts React-Toastify

Toastify parameters [https://fkhadra.github.io/react-toastify/introduction/]

## Dark mode Next-Themes

(https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind)

Create dynamic themes (https://www.youtube.com/watch?v=vIBKSmWAdIA). Beware of Nextjs and localStorage
