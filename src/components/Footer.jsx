import Logo from "@/icons/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 gap-6 mb-10 md:grid-cols-4 lg:grid-cols-5">
        <div className="hidden col-span-full lg:col-span-1 lg:block">
          {/* <a
            className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a> */}
          <Logo />
          <p className="mt-3 text-xs text-gray-600 sm:text-sm dark:text-gray-400">
            ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ <br /> ແຂວງສະຫວັນນະເຂດ
          </p>
        </div>

        {/* Product Section */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-100">ກ່ຽວກັບພະແນກ</h4>
          <div className="grid mt-3 space-y-3 text-sm">
            <p>
              <Link
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/about/duty"
              >
                ພາລະບົດບາດ
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/about/scope"
              >
                ຂອບເຂດສິດ
              </Link>
            </p>
            <p>
              <Link
                className="inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/about/structure"
              >
                ໂຄງປະກອບການຈັດຕັ້ງ
              </Link>
            </p>
            {/* More items */}
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">ວຽກງານການເຄື່ອນໄຫວ</h4>
          {/* Company links */}
        </div>

        {/* Resources Section */}
        {/* <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">ເອກະສານເຜີຍແຜ່</h4>
        </div> */}

        {/* Developers Section */}
        {/* <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Developers</h4>
        </div> */}
      </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">{/* Language Dropdown and other links */}</div>
      </div>
    </footer>
  );
}
