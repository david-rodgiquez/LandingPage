import NewLayout from "@/components/NewLayout";
import IconAnotation from "@/components/icons/IconAnotation";
import IconDigitalThreads from "@/components/icons/IconDigitalThreads";
import IconProductDataManagement from "@/components/icons/IconProductDataManagement";
import IconProjectManagement from "@/components/icons/IconProjectManagement";
import IconRequirements from "@/components/icons/IconRequirement";
import IconSystemModeling from "@/components/icons/IconSystemModeling";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { RiveComponent } from "..";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { createPortal } from "react-dom";
import IconXMark from "@/components/icons/IconXMark";
import IconCADCollaboration from "@/components/icons/IconCADCollaboration";
import IconDesignReviews from "@/components/icons/IconDesignReviews";

const menus = [
  {
    icon: IconCADCollaboration,
    name: "CAD Collaboration",
  },
  {
    icon: IconDigitalThreads,
    name: "Digital Threads",
  },
  {
    icon: IconSystemModeling,
    name: "System Modeling",
  },
  {
    icon: IconProductDataManagement,
    name: "PDM",
  },
  {
    icon: IconRequirements,
    name: "Requirements",
  },
  {
    icon: IconDigitalThreads,
    name: "Annotations",
  },
  {
    icon: IconProjectManagement,
    name: "Project Management",
  },
  {
    icon: IconDesignReviews,
    name: "Design Reviews",
  },
] as const;

function GenericContentSystemModeling({ title }: { title: string }) {
  return (
    <div className="content w-full ">
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        porttitor euismod pellentesque. Maecenas eget dolor sit amet metus
        pellentesque porttitor sit amet at lectus.
      </p>
      <p>
        Maecenas aliquet at libero a dapibus. Donec maximus ultricies purus nec
        eleifend. In hac habitasse platea dictumst. Duis lobortis et arcu non
        porta.
      </p>
      <div className="box-content w-full h-[553px] rounded-lg"></div>
      <h4>Features</h4>
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper arcu vel felis lobortis, eu tempor dolor iaculis. Etiam
          sed hendrerit odio, et sagittis lectus.
        </li>
        <li>
          Nullam vel enim posuere, blandit risus sed, accumsan ligula. Nulla
          scelerisque ullamcorper enim, et condimentum orci accumsan sit amet.
          Sed viverra tortor non maximus semper.
        </li>
        <li>
          Proin et lobortis sem. Vivamus molestie odio quis arcu eleifend
          fringilla. Etiam dolor quam, iaculis id quam eget, fermentum pharetra
          urna. Integer bibendum non velit vitae imperdiet.
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        porttitor euismod pellentesque. Maecenas eget dolor sit amet metus
        pellentesque porttitor sit amet at lectus.
      </p>
      <p>
        Maecenas aliquet at libero a dapibus. Donec maximus ultricies purus nec
        eleifend. In hac habitasse platea dictumst. Duis lobortis et arcu non
        porta.
      </p>
    </div>
  );
}

const systemModelingMenus = [
  {
    name: "Properties",
    description: "Short description",
    content: () => {
      return (
        <div className="content w-full ">
          <h3>Properties</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porttitor euismod pellentesque. Maecenas eget dolor sit amet metus
            pellentesque porttitor sit amet at lectus.
          </p>
          <p>
            Maecenas aliquet at libero a dapibus. Donec maximus ultricies purus
            nec eleifend. In hac habitasse platea dictumst. Duis lobortis et
            arcu non porta.
          </p>
          <RiveComponent
            className=""
            src="https://public.rive.app/hosted/311509/109741/a5KUF5v7_06g_6szzyZJmw.riv"
          />
          <h4>Features</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper arcu vel felis lobortis, eu tempor dolor iaculis.
              Etiam sed hendrerit odio, et sagittis lectus.
            </li>
            <li>
              Nullam vel enim posuere, blandit risus sed, accumsan ligula. Nulla
              scelerisque ullamcorper enim, et condimentum orci accumsan sit
              amet. Sed viverra tortor non maximus semper.
            </li>
            <li>
              Proin et lobortis sem. Vivamus molestie odio quis arcu eleifend
              fringilla. Etiam dolor quam, iaculis id quam eget, fermentum
              pharetra urna. Integer bibendum non velit vitae imperdiet.
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porttitor euismod pellentesque. Maecenas eget dolor sit amet metus
            pellentesque porttitor sit amet at lectus.
          </p>
          <p>
            Maecenas aliquet at libero a dapibus. Donec maximus ultricies purus
            nec eleifend. In hac habitasse platea dictumst. Duis lobortis et
            arcu non porta.
          </p>
        </div>
      );
    },
  },
  {
    name: "Child Blocks",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Block type",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Properties features",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Part number format",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Multiplicity",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Table",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
] as const;

function MenuContentFloating({
  children,
  close,
}: {
  close: () => void;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  return createPortal(
    <div
      onClick={(e) => e.preventDefault()}
      className="fixed modules-section bottom-0 z-50 h-screen backdrop-blur bg-[rgba(0,0,0,0.5)]"
    >
      <div
        ref={containerRef}
        className="bg-white relative mt-12 pb-16 overflow-y-auto h-full px-4 py-5 rounded-t-3xl w-full"
      >
        <button
          onClick={close}
          type="button"
          className="absolute right-6 top-6"
        >
          <IconXMark />
        </button>
        {children}
      </div>
    </div>,
    document.body!
  );
}

function useContentFloating(): [
  React.JSX.Element | null,
  (component: React.JSX.Element) => void
] {
  const [modal, setModal] = useState<React.JSX.Element | null>(null);

  const showModal = useCallback(
    (component: React.JSX.Element) => {
      if (!modal) {
        setModal(component);
      } else {
        setModal(null);
      }
    },
    [modal]
  );

  const modalToShow = useMemo(() => {
    if (modal == null) return null;
    return (
      <MenuContentFloating close={() => setModal(null)}>
        {modal}
      </MenuContentFloating>
    );
  }, [modal]);

  return [modalToShow, showModal];
}

function useIsMobile() {
  const [isInMobile, setIsInMobile] = useState(false);

  useEffect(() => {
    const changeSetIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsInMobile(true);
      } else {
        setIsInMobile(false);
      }
    };

    changeSetIsMobile();

    window.addEventListener("resize", changeSetIsMobile);
    return () => {
      window.addEventListener("resize", changeSetIsMobile);
    };
  }, []);

  return isInMobile;
}

function Section<T extends string>({
  title,
  description,
  items,
  initialSelectedItem,
  isDark,
  setSelectedMenu: setSelectedNavigationMenu,
}: {
  isDark?: boolean;
  initialSelectedItem: T;
  title: string;
  description: string;
  items: Readonly<
    {
      name: T;
      description: string;
      content: (args: { title: string }) => React.JSX.Element;
    }[]
  >;
  setSelectedMenu: () => void;
}) {
  const isInMobile = useIsMobile();
  const [modal, showModal] = useContentFloating();
  const [selectedMenu, setSelectedMenu] =
    useState<(typeof items)[number]["name"]>(initialSelectedItem);
  const Content = items.find((menu) => menu.name === selectedMenu)!.content;
  const { ref, entry } = useInView({
    trackVisibility: true,
    delay: 100,
  });
  const isVisible = (entry as unknown as { isVisible: boolean | undefined })
    ?.isVisible;

  useEffect(() => {
    if (isVisible) {
      setSelectedNavigationMenu();
    }
  }, [isVisible, setSelectedNavigationMenu]);

  return (
    <section
      ref={ref}
      id={title}
      className={`modules-section w-full ${isDark ? "dark" : ""}`}
    >
      <div className="max-w-7xl px-4 mx-auto w-full py-36">
        <h2 className="text-4xl font-semibold title">{title}</h2>
        <p className="font-medium text-xl max-w-lg mt-2 description">
          {description}
        </p>
        <div className="w-full mt-10 flex">
          <div className="md:w-80 w-full shrink-0 flex flex-col gap-1 items-start">
            {items.map((menu) => {
              const isSelected = selectedMenu === menu.name;
              return (
                <button
                  key={menu.name}
                  type="button"
                  onClick={() => {
                    setSelectedMenu(menu.name);
                    showModal(<Content title={selectedMenu} />);
                  }}
                  className={`menu px-2 transition-colors py-1.5 flex group gap-2 rounded-lg w-full text-left ${
                    isSelected ? "active" : ""
                  }`}
                >
                  <div className={`square border rounded h-6 w-6`}></div>
                  <div className="flex flex-col leading-tight">
                    <span className={`title-menu text-xl font-medium`}>
                      {menu.name}
                    </span>
                    <span className={`description-menu text-[#738091]`}>
                      {menu.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="hidden md:block vertical-line w-[3px] rounded-sm border-r shrink-0 border-dashed border-2 mx-12"></div>
          <div className="hidden md:block grow">
            <Content title={selectedMenu} />
          </div>
          {isInMobile && modal}
        </div>
      </div>
    </section>
  );
}

const digitalThreadsMenus = [
  {
    name: "Property relations",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Hierarchy",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
] as const;

const projectManagementMenus = [
  {
    name: "Feature 1",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Feature 2",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Feature 3",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
] as const;

const annotationsMenus = [
  {
    name: "Feature 1",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Feature 2",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Feature 3",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
] as const;

const requirementsMenus = [
  {
    name: "Requirement packages",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Requirements views",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "ID Editor",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Requirements Management",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Exchange",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
] as const;

const productDataManagementMenus = [
  {
    name: "Feature 1",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Feature 2",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
  {
    name: "Feature 3",
    description: "Short description",
    content: GenericContentSystemModeling,
  },
] as const;

export default function Page() {
  const [selectedMenu, setSelectedMenu] =
    useState<(typeof menus)[number]["name"]>();

  return (
    <>
      <Head>
        <title>Modules</title>
      </Head>
      <NewLayout className="">
        <section className="relative flex items-center justify-center min-h-[384px] mb-16">
          <div className="h-96 w-96 bg-[url('/img/home-bg-line.svg')] hidden lg:block bg-no-repeat absolute left-0"></div>
          <div className="max-w-2xl flex flex-col gap-6 mx-auto text-center">
            <span className="uppercase font-medium text-[#4C90F0] text-xl">
              Modules
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold ">
              Headline here
            </h1>
            <p className="font-semibold text-xl max-w-xs md:max-w-md mx-auto">
              Some details here Some details here Some details here Some details
              here Some details here
            </p>
          </div>
          <div className="h-96 w-96 bg-[url('/img/home-bg-line.svg')] bg-no-repeat hidden lg:block absolute right-0"></div>
        </section>

        <section className="overflow-x-hidden sticky top-16 md:top-14 ">
          <div className="border-b w-full sticky overflow-x-auto no-scrollbar top-16 md:top-14 bg-[rgba(255,255,255,0.80)] backdrop-blur-[20px] z-10">
            <div className="max-w-7xl overflow-visible mx-auto md:px-4 flex justify-between">
              {menus.map((menu) => {
                const menuName = menu.name;
                const isActive = menuName === selectedMenu;
                return (
                  <button
                    type="button"
                    key={menu.name}
                    onClick={() => {
                      setSelectedMenu(menuName);
                      if (!menuName) return;
                      const section = document.getElementById(menuName);
                      if (!section) return;
                      const sectionTop = section.getBoundingClientRect().top;
                      const topGap = 57;
                      window.scrollTo({
                        top: sectionTop + window.scrollY - topGap,
                        behavior: "smooth",
                      });
                    }}
                    className={`flex gap-3 whitespace-nowrap py-2 md:py-3 border-b-2 px-3 md:px-4 items-center group hover:stroke-[#4C90F0] hover:text-[#4C90F0] transition-colors ${
                      isActive
                        ? "text-[#4C90F0] border-b-[#4C90F0] stroke-[#4C90F0]"
                        : "text-[#2F343C] border-b-transparent stroke-gray-800"
                    }`}
                  >
                    <menu.icon className="h-8 w-8 text-inherit stroke-inherit" />
                    <span className="text-xl font-medium group-hover:text-[#2D72D2] ">
                      {menu.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
        <Section
          setSelectedMenu={() => setSelectedMenu("CAD Collaboration")}
          title="CAD Collaboration"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Properties"
          items={systemModelingMenus}
        />
        <Section
          isDark
          setSelectedMenu={() => setSelectedMenu("Digital Threads")}
          title="Digital Threads"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Property relations"
          items={digitalThreadsMenus}
        />
        <Section
          setSelectedMenu={() => setSelectedMenu("System Modeling")}
          title="System Modeling"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Properties"
          items={systemModelingMenus}
        />
        <Section
          isDark
          setSelectedMenu={() => setSelectedMenu("PDM")}
          title="Product Data Management"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Feature 1"
          items={productDataManagementMenus}
        />
        <Section
          setSelectedMenu={() => setSelectedMenu("Requirements")}
          title="Requirements"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Requirement packages"
          items={requirementsMenus}
        />
        <Section
          isDark
          setSelectedMenu={() => setSelectedMenu("Annotations")}
          title="Annotations"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Feature 1"
          items={productDataManagementMenus}
        />
        <Section
          setSelectedMenu={() => setSelectedMenu("Project Management")}
          title="Project Management"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Feature 1"
          items={projectManagementMenus}
        />
        <Section
          setSelectedMenu={() => setSelectedMenu("Design Reviews")}
          isDark
          title="Design Reviews"
          description="Some details here Some details here Some details here Some details here Some details here"
          initialSelectedItem="Feature 1"
          items={annotationsMenus}
        />
      </NewLayout>
    </>
  );
}
