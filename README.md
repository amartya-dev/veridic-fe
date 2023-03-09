# Veridic FE 

## Project Details

This is a basic react project which built using:
- [Mui](https://mui.com/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### API calls
The project has a custom axios setup to support:
- Automatic snake case to camel case conversion and vice-versa.
- Error handling with interceptors.
- Auto-add `Authorization` header with the user authorization token.

The project then uses an API object to allow calling APIs seamlessly. Refer `src/apps/posts/utils/postAPIs.ts` for more details on the same.

### Project Structure
All the relavant code is inside `src/apps`, the apps are made according to a single use-case to allow separation of concern, react-sweet-state allows being able to have a "local" sort of redux store for the app which is useful in managing everything related to it right there, this might be useful in case the app grows in size and there is a need to pulish,manage and host these separately.

The app structure is as follows:
- components: The components which are used in the app.
- features: All the pages that exist in the app.
- models: The models used in the app.
- utils: Other utility functions, including the API calls etc.
- stores: The custom store used for redux based functions to be used in the app.

The app also uses different layouts for different scenarios, they can be found under `src/app/layouts`
The common functionalities such are abstracted out in `src/app/common`

### Theming
The `theme.ts` file is used to override the default MUI theme.

### Routing
The routing is handled via `src/routes.tsx`, we use `useRoutes` from `react-router-dom` to handle the routing, with as many children routes as possible, for example:
```ts
{
    path: "/items",
    element: <DashboardLayout />,
    children: [
        { path: "all", element: <ItemsList /> },
        { path: "add", element: <ItemsAdd /> },
        { path: ":id", element: <ItemDetails /> },
    ],
},
```
The above setup uses the `DashboardLayout` and then allows rendering the elements on top of it.

### Menu items
The project uses a `Drawer` on the left page (which is responsive) to render menus, the code is configured to auto-highlight the required menu item based on the current route.
You can easily add more items there by including them in `src/apps/layouts/dashboard/SidebarConfig.tsx`, for example, if you were to add a new menu called `Foo` with two sub items like `Bar` and `Baz`, you would add them in `src/apps/layouts/dashboard/SidebarConfig.tsx` as follows:
```ts
{
    title: "foo",
    path: "/foo",
    children: [
        {
            title: "Bar",
            path: "/foo/bar",
        },
        {
            title: "Baz",
            path: "/foo/baz",
        },
    ],
    icon: getIcon(someIcon),
},
```
