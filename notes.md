# Dev notes

## ISSUES

### Vercel deploying old production branch

- I completely broke vercel
  - I created a new vercel project and linked it to main. Currently seems to have soled my issue.
  - Will hold onto the old deployment for now

## TO DO

### myEvents Page

Goal: create a page where I can list personal events and have a system inwhich users can easily RSVP to said event
Currently would like to create a page for my 30th birthday party
Requirements:

- Change CV to recruiters version
- Add password for events page | TEMP FIX - dissconnect events page from navbar. Only accessible with link

- RSVP - need to add url params so that RSVP URL is linked to the correct event
- TEMP RSVP PAGE CREATED. Eventually will need to like that page with different events and link the events page with my supabase for different events
- Check Status. AKA have they been accepted?
- Ability to edit ones RSVP
- RSVP should have a group function to allow users to group with other users. The group should have a "leader" in which I could easily contact about group requirements

- Git branch = page_myEvents

## HTML

' = &apos;

## CSS

### Icons

Style fa6
ICONS [https://react-icons.github.io/react-icons/search/#q=fagithub]

### TailwindCSS

https://www.youtube.com/watch?v=guh9qzxkb1o -> setting class name variables 4:44
example:

```tsx
    const colorVariants = {
        blue: 'bg-blue-500 hover:bg-blue-500 etc etc'
        red: 'etc etc'
    }

    <div className={`${colorVarient['blue']}`}></div>
```

Breakpoints:

Can have a rang. Example:

```tsx
className = "md:max-xl:flex";
```

Need to start using "Container" class!!!

### Center inside parent div

### CLSX Class Combinator

```tsx
import clsx from "clsx";

const myClass = clsx(
  "text-2xl font-bold",
  isSubtle && "text-gray-500",
  isImportant ? "text-red-500" : "text-green-500"
);
```

flex items-center justify-center

## Alerts React-Toastify

Toastify parameters [https://fkhadra.github.io/react-toastify/introduction/]

## Dark mode Next-Themes

(https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind)

Create dynamic themes (https://www.youtube.com/watch?v=vIBKSmWAdIA). Beware of Nextjs and localStorage

## Supabase Client

example data insert

```tsx
const insertDataToSupabase = async () => {
  const supabaseClient = supabase;
  const { data, error } = await supabaseClient
    .from("user_rsvp")
    .insert({
      event_id: usersEventID,
      name: usersName,
      email: usersEmail,
      phone_number: usersPhoneNumber,
      notes: userNotes,
    })
    .select();
  return { data, error };
};
```
