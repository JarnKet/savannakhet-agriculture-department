import Image from "next/image";

export default function Scope() {
  return (
    <section>
      <div className="min-h-[70vh] w-full relative">
        <Image src={"/duty-hero.jpg"} alt="duty hero" fill sizes={100} className="object-cover" />
        <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h1 className="text-4xl font-bold lg:text-8xl">ຂອບເຂດສິດ</h1>
          <p className="text-xl lg:text-2xl">ພະແນກກະສິກຳ ແລະ ປ່າໄມ້ ແຂວງສະຫວັນນະເຂດ</p>
        </div>
      </div>
      <ol className="max-w-[50rem] mx-auto p-10 flex flex-col gap-10 text-xl list-decimal">
        <li>
          ຄົ້ນຄວ້າ ແລະ ສະເໜີປັບປຸງກົງຈັກການຈັດຕັ້ງຂອງຕົນຕໍ່ອົງການປົກຄອງແຂວງ ໂດຍເອກະພາບກັບກະຊວງກະສິກຳ ແລະ ປ່າໄມ້, ກຳນົດຕຳແໜ່ງງານ, ບັນຈຸ, ສັບຊ້ອນ ແລະ
          ຈັດວາງບຸກຄະລາກອນ ໃນພະແນກກະສິກຳ ແລະ ປ່າໄມ້ແຂວງ ຕາມການແບ່ງຂັ້ນຄຸ້ມຄອງ ທີ່ກົດໝາຍ ແລະ ລະບຽບການກຳນົດຕາມທິດກະທັດຮັດ, ເຂັ້ມແຂງ ແລະ ມີປະສິດທິພາບ;
        </li>
        <li>
          ຈັດຕັ້ງປະຕິບັດບັນດານິຕິກຳ, ຄຳແນະນຳ, ກຳນົດໝາຍເຕັກນິກ ແລະ ມາດຕະຖານ ທີ່ກະຊວງວາງອອກເພື່ອຄຸ້ມຄອງວຽກງານກະສິກຳ, ປ່າໄມ້, ການປຸງແຕ່ງກະສິກຳ-ປ່າໄມ້ ແລະ
          ວຽກງານພັດທະນາຊົນນະບົດຂອງແຂວງ; ຜັນຂະຫຍາຍຈັດຕັ້ງປະຕິບັດການຊີ້ນຳຂອງກະຊວງ ໃນດ້ານເຕັກນິກວິຊາການ ຕາມລະບົບກົນໄກຄຸ້ມຄອງສາຍຕັ້ງ, ແບ່ງຂັ້ນຄຸ້ມຄອງ,
          ແບ່ງຄວາມຮັບຜິດຊອບ ແລະ ແບ່ງສິດ ໃນການຕົກລົງບັນຫາ; ເຜີຍແຜ່ແນວທາງນະໂຍບາຍ, ກົດໝາຍ, ລະບຽບການ ແລະ ມາດຕະການຕ່າງໆ ທີ່ກ່ຽວຂ້ອງກັບພາລະບົດບາດ
          ຂອງຂະແໜງກະສິກຳ ແລະ ປ່າໄມ້; ຈັດກອງປະຊຸມ, ງານວາງສະແດງສິນຄ້າກະສິກຳ ແລະ ຕະຫຼາດນັດ, ຝຶກອົບຮົມ, ສຳມະນາວິຊາການ;
        </li>
        <li>
          ອອກຄຳແນະນຳ, ແຈ້ງການ, ໜັງສືສະເໜີ ເຖິງພະແນກການອ້ອມຂ້າງແຂວງ, ຫ້ອງການກະສິກຳ ແລະ ປ່າໄມ້ເມືອງ, ເທດສະບານ, ນະຄອນ, ໂຄງການ, ຫົວໜ່ວຍວິຊາການ ແລະ
          ຫົວໜ່ວຍການຜະລິດ, ຫົວໜ່ວຍທຸລະກິດກ່ຽວກັບວຽກງານກະສິກຳ, ປ່າໄມ້, ການປຸງແຕ່ງກະສິກຳ ແລະ ວຽກງານພັດທະນາຊົນນະບົດພາຍໃນແຂວງ;
        </li>
        <li>
          ສະເໜີອົງການປົກຄອງແຂວງປັບປຸງ, ໂຈະການປະຕິບັດ, ລົບລ້າງ ຫຼື ຍົກເລີກນິຕິກໍາ ຂອງພະແນກການອື່ນ ແລະ ອົງການປົກຄອງເມືອງ, ເທສະບານ, ນະຄອນ ທີ່ຂັດກັບກົດໝາຍ
          ແລະ ລະບຽບການຂອງຂະແໜງການຕົນ;
        </li>
        <li>
          ຄົ້ນຄວ້າ, ປະກອບຄຳເຫັນ ກ່ຽວກັບການລົງທຶນພາຍໃນ ແລະ ຕ່າງປະເທດ ດ້ານກະສິກຳ ແລະ ປ່າໄມ້; ຢັ້ງຢືນບົດວິພາກເສດຖະກິດ-ເຕັກນິກ, ຢັ້ງຢືນແຜນການນຳເຂົ້າ, ອອກ
          ຫຼື ຖອນ ໃບອະນຸຍາດດຳເນີນທຸລະກິດກະສິກຳ ແລະ ປ່າໄມ້ ຕາມການແບ່ງຂັ້ນຄຸ້ມຄອງ ບົນພື້ນຖານກົດໝາຍ ແລະ ລະບຽບການແຕ່ລະໄລຍະ;
        </li>
        <li>
          ກວດກາສະຖານທີ່ ແລະ ການດຳເນີນທຸລະກິດ ເພື່ອການຢັ້ງຢືນດ້ານຄຸນນະພາບ, ຄວາມປອດໄພສຳລັບການສະເໜີອະນຸຍາດສົ່ງອອກ, ນຳເຂົ້າ ແລະ ຂົນສົ່ງຜ່ານ
          ຜະລິດຕະພັນກະສິກຳ ແລະ ປ່າໄມ້, ບັນດາວັດຖຸອຸປະກອນ, ປັດໄຈການຜະລິດ ຕາມແຜນການທີ່ໄດ້ຮັບອະນຸມັດຈາກອົງການປົກຄອງແຂວງ ຫຼື ກະຊວງຕາມກົດໝາຍ ແລະ ລະບຽການ;
          ຄຸ້ມຄອງ, ກວດກາ, ກັກກັນພືດ ແລະ ສັດ ຢູ່ດ່ານຊາຍແດນ ແລະ ສະໜາມບິນສາກົນຕາມການມອບໝາຍສິດ ຈາກລັດຖະມົນຕີກະຊວງກະສິກຳ ແລະ ປ່າໄມ້; ຄຸ້ມຄອງກວດກາ,
          ກັກກັນພືດ ແລະ ສັດ ຢູ່ດ່ານຊາຍແດນທ້ອງຖິ່ນຕາມການມອບໝາຍສິດ ຈາກເຈົ້າແຂວງພ້ອມທັງວາງມາດຕະການຕິດຕາມ ແລະ ສະກັດກັ້ນການແຜ່ລະບາດ ຂອງສັດຕູພືດ ແລະ
          ພະຍາດສັດໃຫ້ທັນເວລາ, ຂຶ້ນທະບຽນ, ຢັ້ງຢືນສວນປູກພືດ, ສວນປູກໄມ້, ຟາມລ້ຽງສັດ ແລະ ສັດນ້ຳ ຕາມການແບ່ງຂັ້ນຄຸ້ມຄອງ;
        </li>
        <li>
          ຄົ້ນຄວ້າ, ວາງແຜນ ແລະ ນຳສະເໜີເຈົ້າແຂວງກ່ຽວກັບວຽກງານພັດທະນາຊົນນະບົດ ເພື່ອຊອກຫາຮູບແບບ ແລະ ວິທີການທີ່ເໝາະສົມໃນການຈັດສັນພູມລຳເນົາ,
          ການຝຶກອົບຮົມວິຊາຊີບ ແລະ ຈັດສັນອາຊີບຄົງທີ່ໃຫ້ປະຊາຊົນ ພາຍຫຼັງຢຸດຕິການຖາງປ່າເຮັດໄຮ່;
        </li>
        <li>
          ຮຽກໂຮມພະນັກງານນຳພາ-ຄຸ້ມຄອງ ແລະ ນັກວິຊາການໃນຄວາມຮັບຜິດຊອບຂອງຕົນ, ເຂົ້າຮ່ວມກອງປະຊຸມ ຫຼື ລາຍງານສ່ອງແສງວຽກງານເປັນແຕ່ລະໄລຍະ;
          ຫັນພະນັກງານລົງປະຈຳຢູ່ສູນ, ສະຖານີ ແລະ ກອງຄຸ້ມຄອງ 03 ປະເພດປ່າຢູ່ພາກສະໜາມ ຕາມຄວາມຮຽກຮ້ອງຕ້ອງການ ຂອງໜ້າທີ່ວຽກງານຕາມທີ່ໄດ້ກຳນົດໄວ້
          ໃນລະບຽບການທີ່ກ່ຽວຂ້ອງ;
        </li>
        <li>
          ຄຸ້ມຄອງ, ບຳລຸງກໍ່ສ້າງ, ນຳໃຊ້, ຈັດວາງ, ປະຕິບັດນະໂຍບາຍ ແລະ ປະຕິບັດວິໄນຕໍ່ພະນັກງານ-ລັດຖະກອນ ທີ່ຢູ່ພາຍໃຕ້ການຄຸ້ມຄອງຂອງຕົນ ຕາມການແບ່ງຂັ້ນຄຸ້ມຄອງ;
        </li>
        <li>
          ຄຸ້ມຄອງ, ແບ່ງປັນ ແລະ ມອບໝາຍແຜນການ, ງົບປະມານ, ພາຫະນະ ແລະ ອຸປະກອນທີ່ໄດ້ຮັບອະນຸມັດຈາກອົງການປົກຄອງແຂວງ, ກະຊວງ ໃຫ້ບັນດາຂະແໜງການ, ສູນ, ໂຄງການ
          ອ້ອມຂ້າງພະແນກ ແລະ ຫົວໜ່ວຍວິຊາການທີ່ຂຶ້ນກັບຕົນ ເພື່ອນຳໃຊ້ເຂົ້າໃນການຈັດຕັ້ງປະຕິບັດວຽກງານ ຕາມກົດໝາຍ ແລະ ລະບຽບການໃຫ້ມີປະສິດທິຜົນສູງ;
        </li>
        <li>
          ດຳເນີນການກວດກາຜົນການຈັດຕັ້ງປະຕິບັດແຜນງານ, ແຜນການ ແລະ ໂຄງການພັດທະນາກະສິກຳ, ປ່າໄມ້ ແລະ ພັດທະນາຊົນນະບົດຂອງແຂວງ ເພື່ອສະຫຼຸບສັງລວມ, ວິໄຈ ແລະ
          ປະເມີນຜົນໃຫ້ເຫັນດ້ານດີ, ດ້ານອ່ອນ ແລະ ຄົງຄ້າງແລ້ວວາງມາດຕະການແກ້ໄຂໃນຕໍ່ໜ້າພ້ອມທັງລາຍງານກະຊວງ ແລະ ອົງການປົກຄອງແຂວງ.
        </li>
        <li>ປະຕິບັດສິດອື່ນ ຕາມກົດໝາຍ, ລະບຽບການ ແລະ ຕາມການມອບໝາຍຂອງທ່ານເຈົ້າແຂວງ ແລະ ລັດຖະມົນຕີກະຊວງກະສິກຳ ແລະ ປ່າໄມ້.</li>
      </ol>
    </section>
  );
}