import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex text-gray-500 items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink to={'/'}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex text-gray-500 items-center gap-2 py-2 pr-4">Home</ListItem>
        </Typography>

      </NavLink>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        {/* <ListItem className="flex text-gray-600 items-center gap-2 py-2 pr-4">
          Courses
        </ListItem> */}

        <a href="/allcourse" className="flex text-gray-600 items-center gap-2 py-2 pr-4">
          Courses
        </a>

      </Typography>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4  text-gray-500 cursor-pointer py-1.5 lg:ml-2"
        >
          <NavLink to={'/'}>
            <div class="flex items-center">
              <img src="data:image/png;base64,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" alt="EduConnect" className="w-12 h-12 mr-4" />
              <p>EduConnect</p>
            </div>
          </NavLink>

        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <a href="/login">
            <Button className="text-gray-500" variant="text" size="sm" color="blue-gray" href='/login' >
              Log In
            </Button>
          </a>
          {/* <a href="/signup">
            <Button className="text-gray-500" variant="gradient" size="sm">
              Sign UP
            </Button>
          </a> */}
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {/* <NavList /> */}
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button href='/login' variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}