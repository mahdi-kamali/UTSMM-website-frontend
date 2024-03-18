import Table from "../../../../cutsome-components/table/Table";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import Property from "../../../../cutsome-components/table/components/Property";
import Row from "../../../../cutsome-components/table/components/Row";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import {useEffect, useState} from "react";
import {useFetch} from "../../../../../lib/useFetch"
import {API} from "../../../../../lib/envAccess";
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations";
import ResponsivePagination from 'react-responsive-pagination';


export default function CommentPage() {

    const [pageNumber, setPageNumber] = useState(1)
    // TODO: To Be changed
    const [data, error, loading, setUrl] = useFetch(
        API.ADMIN_DASHBOARD.ORDERS.GET + pageNumber,
    )

    const headersList = [
        "Name",
        "Tel",
        "Message",
        "Accept",
        "Answer"
    ]

    const orderListButtons = [
        "All",
        "success",
        "on progress",
        "on error",
        "on pause"
    ]

    const [ordersStatus, setOrdersStatus] = useState(orderListButtons[0])

    const [sortedList, setSortedList] = useState([])

    useEffect(() => {

        if (ordersStatus === orderListButtons[0]) {
            setSortedList(data.orders)
            return
        }

        const temp = data?.orders?.filter(item => {
            return item.status === ordersStatus
        })

        setSortedList(temp)
    }, [ordersStatus, data])


    return (
        <div className="admin-panel-orders">
            <div className="intro">
                <h1>Recent Orders</h1>
                <div className="order-list">
                    {
                        orderListButtons.map((record, index) => {
                            return <button
                                key={index}
                                className={`status-${record ===
                                ordersStatus}`}
                                onClick={() => setOrdersStatus(record)}
                            >
                                {record}
                            </button>
                        })
                    }
                </div>
            </div>
            <Table columnsStyle={"6rem 6rem 1.8fr 6rem 1fr 6rem 5rem 8rem"}>
                <TableHeader>
                    {
                        headersList.map((record, index) => {
                            return <ItemHeader key={index}>
                                {record}
                            </ItemHeader>
                        })
                    }
                </TableHeader>
                {
                    <TableBody>
                        {
                            !loading ? sortedList?.map((record, index) => {
                                return <Row key={index}>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[0]}
                                        </div>
                                        <div className="property-body">
                                            {record.name}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[1]}
                                        </div>
                                        <div className="property-body">
                                            {record.tel}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[2]}
                                        </div>
                                        <div className="property-body ">
                                            {record.message}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[3]}
                                        </div>
                                        <div className="property-body">
                                            <button>Accept</button>
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[4]}
                                        </div>
                                        <div className="property-body">
                                            <input type="text" placeholder={'Write here'}/>
                                        </div>
                                    </Property>
                                </Row>
                            }) : <h1>Loading...</h1>
                        }

                    </TableBody>
                }

                <TablePaginations>
                    <ResponsivePagination
                        current={data?.currentPage}
                        total={data?.maxPageNumber}
                        onPageChange={(pageNumber) => {
                            setUrl(API.ADMIN_DASHBOARD.ORDERS.GET + pageNumber)
                        }}
                    />
                </TablePaginations>
            </Table>
        </div>
    )
}
