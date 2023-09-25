# React Router DOM

- React router is the way to navigate to different pages without reloading the whole page. It is the third party dependency known as `react-router-dom`, which works with `react`.

## `<Link> <Link />`

- `<Link>` tag is used to define the routing component, when we pass name of the page in the URL at the search bar after the `/`. e.g. `/about`, `/contact`, `/user`. it will redirect to that component without reloading the page.

NOTE: `<a>` tag can not be used to pass the different URL as it will reload the page on the application.

## `NavLink`

- it is the similar tag like the `<Link />`, it gives the different access to show the user the active page. How ?

```Javascript
<NavLink
    to={"about"}
    className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0

    ${isActive ? "text-orange-700" : "text-gray-700"}

     hover:text-orange-700 lg:p-0`}>
    About
</NavLink>
```

- when we pass the call back function inside the className with attribute `{isActive}`, as it gives the functionality, when the `isActive` is `true`, display the user a `text color shade orange` or display `text color shade gray` in this case.

## `Layout.jsx`

`Layout.jsx` is a component for the better structure to keep the code clean. Usually, in the app, `Header` and `Footer` component will place as it is, but other component will be change according to user navigation in the App.

### `<Outlet/>`

`Outlet` tag will be used as we can dynamically pass the other component at a place of `outlet` and the page will be shown differently.

```Javascript
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
```

---

```Javascript
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// we have to wrap the whole application in the `RouterProvide`, which is available in the react-router-dom
```

## `createBrowserRouter`

```Javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "",
        element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
```

```Javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={gitHubApiResponse} path="github" element={<Github />} />
    </Route>
  )
);
```

NOTE: These are both different way to define the component, which will be place in the `<Outlet/>`. both will work exactly same.

- It is a syntax provided by the `react-router-dom`. In a way, we can provide the routing for a different component. Usually, we keep the `/` as the Home component and URL will look like `https://www.app.com/`.
- If we need to configure the nesting URL. we pass those component attributes inside the children path. so the URL will look like `https://www.app.com/about` or `https://www.app.com/contact` as per the requirement.

---

## `useParams hook`

```Javascript
const {userId } = useParams();

// useParams hooks will store the uniqueId in the API or any data. and we can use it at any place.
```

`<Route path="user/userId" element={<User />} />`. `userId` is a way to access the component or the page for that particular ID. when we pass the URL like `https://www.app.com/user/100`. it will access the dynamic page stored at something `100`userId.

Example:- When we make the application like the `e-commerce` or the `Food ordering APP`. then, every restaurant or the category has the unique id. when we need to access that category in the URL, we provide the userid associated with the page in the URL

# Optimization

## `loader`

```Javascript
<Route loader={gitHubApiResponse} path="github" element={<Github />}

// gitHubApiResponse is the method, which will fetch the data from the github profile.
```

- It is the fantastic way to optimize the app. `react-router-dom` will provide the functionality of the `loader`. when user hover on the button or the navList, loader will fetch the API data from the server. Finally, when user click the attribute, instantly, user will see the data which was fetch from the API.

- it will give the faster experience to the user.

## `useLoader`

- It is the Hook, which will store the loader data inside the component. and, It is a way to connect the API data and router.
