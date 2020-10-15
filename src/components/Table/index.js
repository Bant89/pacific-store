import React from "react"
import { useTable } from "react-table"
import { Container, ProductImage } from "./styles"
import Button from "components/Button"
import { IoIosStar } from "react-icons/io"
import breadProduct from "../../static/images/breadProduct.jpg"

export default function Table() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Imagen',
                accessor: 'image',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Stock',
                accessor: 'stock',
            },
            {
                Header: 'Valoración',
                accessor: 'valoration',
            },
            {
                Header: 'Acciones',
                accessor: 'actions',
            },
        ],
        []
    )

    const data = React.useMemo(() => [{
        image: <div><ProductImage src={breadProduct} alt="product-name" /></div>,
        name: "Producto de comida",
        stock: "13",
        valoration: <div>
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="black" size="1rem" />
        4.0(50)
        </div>,
        actions: <div>
            <Button theme="secondary">Editar</Button>
            <Button theme="secondary">Desactivar</Button>
        </div>,
    },
    {
        image: <div><ProductImage src={breadProduct} alt="product-name" /></div>,
        name: "Producto de comida",
        stock: "13",
        valoration: <div>
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="black" size="1rem" />
        4.0(50)
        </div>,
        actions: <div>
            <Button theme="secondary">Editar</Button>
            <Button theme="secondary">Desactivar</Button>
        </div>,
    },
    {
        image: <div><ProductImage src={breadProduct} alt="product-name" /></div>,
        name: "Producto de comida",
        stock: "13",
        valoration: <div>
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="black" size="1rem" />
        4.0(50)
        </div>,
        actions: <div>
            <Button theme="secondary">Editar</Button>
            <Button theme="secondary">Desactivar</Button>
        </div>,
    },
    {
        image: <div><ProductImage src={breadProduct} alt="product-name" /></div>,
        name: "Producto de comida",
        stock: "13",
        valoration: <div>
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="goldenrod" size="1rem" />
            <IoIosStar color="black" size="1rem" />
        4.0(50)
        </div>,
        actions: <div>
            <Button theme="secondary">Editar</Button>
            <Button theme="secondary">Desactivar</Button>
        </div>,
    }], [])

    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = useTable({
        columns,
        data
    })

    return (
        <Container>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )

}