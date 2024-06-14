# Dev notes

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
