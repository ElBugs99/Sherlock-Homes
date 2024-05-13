import React, { useState } from "react";
import Input from "../Input/Input";
import "./sideBar.css";

export default function SideBar() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log('value', event.target.value)
  };

  return (
    <div className="side-bar">
      
      <h2 className="sidebar-title">Categoría</h2>
      <form>
        <Input
          value="Todas"
          title="Todas"
          name="Todas"
          handleChange={handleChange}
        />
        <Input
          value="Casa"
          title="Casa"
          name="Casa"
          handleChange={handleChange}
        />
        <Input
          value="Departamento"
          title="Departamento"
          name="Departamento"
          handleChange={handleChange}
        />
      </form>

      <h2 className="sidebar-title">Precio</h2>
      <form>
        <Input
          value="Todas"
          title="Todas"
          name="Todas"
          handleChange={handleChange}
        />
        <Input
          value="Casa"
          title="Casa"
          name="Casa"
          handleChange={handleChange}
        />
        <Input
          value="Departamento"
          title="Departamento"
          name="Departamento"
          handleChange={handleChange}
        />
      </form>

      <h2 className="sidebar-title">Habitaciones</h2>
      <form>
        <Input
          value="Todas"
          title="Todas"
          name="Todas"
          handleChange={handleChange}
        />
        <Input
          value="Casa"
          title="Casa"
          name="Casa"
          handleChange={handleChange}
        />
        <Input
          value="Departamento"
          title="Departamento"
          name="Departamento"
          handleChange={handleChange}
        />
      </form>

    </div>
  );
}