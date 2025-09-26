import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGasto, fetchGastoDate } from '../../Store/gastoSlice';

const CardGastos = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [edit, setEdit] = useState(false);
  const edited = () => setEdit(!edit);

  const dispatch = useDispatch();
  const allgasto = useSelector((state) => state.gasto.allgasto);
  const status = useSelector((state) => state.gasto.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGasto());
    }
  }, [dispatch, status]);

  const [selectedMonth, setSelectedMonth] = useState("");
  const handleChange = (e) => {
    const month = e.target.value;
    setSelectedMonth(month);
    dispatch(fetchGastoDate(month)); // acá ya hace la request al back
  };
  const optionsArray = [

    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },

  ];



  return (
    <div className='pb-4'>
      <form className="grid grid-cols-7 gap-2 w-full text-xl">
        {/* Filtro */}
        <select className="border p-1 col-span-7" value={selectedMonth}
          onChange={handleChange}>
          {optionsArray.map((option) => (
            <option key={option.value} value={option.value} >
              {option.label}
            </option>
          ))}
        </select>
        <div className="pb-2 pt-2 mb-4 mt-4 border-4 border-dashed border-green-500 rounded-2xl p-1 col-span-7 flex justify-center text-green-500 font-bold text-xl cursor-pointer" onClick={toggle}> New Row</div>
        {/* Encabezados */}
        <div className="font-bold text-center">Category</div>
        <div className="font-bold text-center">Description</div>
        <div className="font-bold text-center">Date</div>
        <div className="font-bold text-center">$</div>
        <div className="font-bold text-center">Detail</div>
        <div className="font-bold text-center">Edit</div>
        <div className="font-bold text-center">Delete</div>

        {/* Filas */}
        {allgasto.map((gasto, index) => (
          <React.Fragment key={gasto.id || index}>
            <input
              type="text"
              className="border rounded p-1"
              defaultValue={gasto.category}   // 👈 lo que tengas en tu modelo
              placeholder="Category"
            />
            <input
              type="text"
              className="border rounded p-1"
              defaultValue={gasto.description}
              placeholder="Description"
            />
            <input
              type="date"
              className="border rounded p-1"
              defaultValue={gasto.date?.slice(0, 10)} // 👈 si viene tipo ISO (YYYY-MM-DD)
            />
            <input
              type="number"
              className="border rounded p-1"
              defaultValue={gasto.price}
              placeholder="Importe"
            />
            <input
              type="text"
              className="border rounded p-1"
              defaultValue={gasto.detail}
              placeholder="Detail"
            />

            <button
              onClick={edited}
              type="button"
              className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600 flex justify-center cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>

            </button>
            <button
              type="button"
              className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 flex justify-center cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>

            </button>
          </React.Fragment>
        ))}
      </form>
      <Modal className='text-2xl' isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          New Row $
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <select className="flex justify-center">
              {optionsArray.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Label for="category">Category</Label>
            <Input type="text" id="category"> </Input>
            <Label for="description">Description</Label>
            <Input type="text" id="description"> </Input>
            <Label for="date">Date</Label>
            <Input type="date" id="date"> </Input>
            <Label for="$$$">$$$</Label>
            <Input type="number" id="$$$"> </Input>
            <Label for="detail">Detail</Label>
            <Input type="text" id="detail"> </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Save</Button>
          {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
        </ModalFooter>
      </Modal>

      <Modal isOpen={edit} edited={edited}>
        <ModalHeader edited={edited}>Edit </ModalHeader>
        <ModalBody>
          <FormGroup>
            <select className="flex justify-center">
              {optionsArray.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Label for="category">Category</Label>
            <Input type="text" id="category"> </Input>
            <Label for="description">Description</Label>
            <Input type="text" id="description"> </Input>
            <Label for="date">Date</Label>
            <Input type="date" id="date"> </Input>
            <Label for="$$$">$$$</Label>
            <Input type="number" id="$$$"> </Input>
            <Label for="detail">Detail</Label>
            <Input type="text" id="detail"> </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={edited}>
            Save
          </Button>
          {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default CardGastos
