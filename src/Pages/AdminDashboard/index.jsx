import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";
import { useGlobalContext } from "../../hook/Context";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useGlobalContext();
  const [tutors, setTutors] = useState(null);

  const getTutors = async () => {
    try {
      let { data: tutors, error } = await supabase.from("tutors").select("*");
      if (error) {
        console.error("", error.message);
        return;
      }
      const filtered = tutors?.filter((item) => !item?.is_approved);
      setTutors(filtered);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
    }
  };

  const updateTutor = async (id) => {
    try {
      // Update the tutor's is_verified and is_approved fields
      const { error } = await supabase
        .from("tutors")
        .update({ is_verified: true, is_approved: true })
        .eq("id", id)
        .select();

      if (error) {
        console.error("Error updating tutor:", error.message);
        return;
      }
      setTutors((prevTutors) => prevTutors.filter((tutor) => tutor.id !== id));
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  useEffect(() => {
    getTutors();
  }, []);

  console.log("tutors:", tutors);

  return (
    <>
      <div className="min-h-screen">
        <Disclosure as="nav" className=" bg-[#401314]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <button onClick={() => navigate("/")}>
                    <img
                      alt="Your Company"
                      src="/assets/frame-logo.png"
                      className="block h-20 w-[300px] lg:hidden"
                    />
                  </button>
                  <button onClick={() => navigate("/")}>
                    <img
                      alt="Your Company"
                      src="/assets/frame-logo.png"
                      className="hidden h-8 w-auto lg:block"
                    />
                  </button>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <h3 className=" px-4 py-2 text-sm text-main font-semibold ">
                        {user?.fullname} as {user?.role}
                      </h3>
                    </MenuItem>

                    <MenuItem>
                      <button
                        onClick={() => navigate("/")}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Go to Home
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.fullname}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Admin Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto mt-10 max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              {tutors?.length === 0 || tutors === null ? (
                <div className="min-h-[200px] flex rounded-md justify-center items-center">
                  <div className="flex flex-col items-center justify-center gap-y-2">
                    <FaRegUserCircle size={40} />
                    <h3 className="font-medium text-lg text-black">
                      No Tutor in the List to Approved
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="mt-2 flow-root">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden ring-1 shadow-sm ring-[#401314] sm:rounded-lg">
                        <table className="min-w-full divide-y divide-[#401314]">
                          <thead className="bg-lightBlack">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-white sm:pl-6"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                              >
                                Badge
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                              >
                                Role
                              </th>
                              <th
                                scope="col"
                                className="relative py-3.5 pr-4 pl-3 sm:pr-6"
                              >
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#4013140] bg-white">
                            {tutors?.map((person) => (
                              <tr key={person.id}>
                                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-6">
                                  {person.fullname}
                                </td>
                                <td className="px-3 py-4 text-sm truncate max-w-[200px] text-gray-500">
                                  {person.description}
                                </td>
                                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                                  {person.badge}
                                </td>
                                <td className="px-3 py-4 capitalize text-sm whitespace-nowrap text-gray-500">
                                  {person.role}
                                </td>
                                <td className="relative flex gap-4 py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-6">
                                  <button
                                    onClick={() => updateTutor(person.id)}
                                    className="bg-primary text-white rounded-sm py-2 px-4 "
                                  >
                                    Accept
                                  </button>
                                  <button className=" bg-[#ff0000b7] text-white rounded-sm py-2 px-4">
                                    Reject
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
