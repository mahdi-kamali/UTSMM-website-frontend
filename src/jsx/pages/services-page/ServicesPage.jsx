



// Puzzle Man 
import { Icon } from "@iconify/react";
import puzzleMan from "../../../images/services-page/services/search/With Puzzle (Man).svg"



// Search
import { useState } from 'react';
import Lottie from 'react-lottie-player';



// Animations 
import servicesPosterWave from "../../../animations/main-page/services-page-wave.json"
import servicesTextuareBackground from "../../../animations/main-page/services-page-background-animation.json"
import Wave from 'react-wavify';
import Table from '../../cutsome-components/table/Table';
import TableHeader from '../../cutsome-components/table/components/TableHeader';
import ItemHeader from '../../cutsome-components/table/components/ItemHeader';
import TableBody from '../../cutsome-components/table/components/TableBody';
import Row from '../../cutsome-components/table/components/Row';
import Property from '../../cutsome-components/table/components/Property';
import { useEffect } from 'react';
import { useFetch } from '../../../lib/useFetch';
import { API, SERVER } from '../../../lib/envAccess';
import TableCategory from '../../cutsome-components/table/components/TableCategory';
import Select from 'react-select'
import PopularServices from './component/PopularServices';








const headerList = [
    "ID",
    "Service",
    "Per 1000",
    "Min order",
    "Max order",
    "Avg. Time",
    "Details"
]


servicesPosterWave.fr = 10
servicesTextuareBackground.fr = 5



const ServicesPage = () => {



    const [
        servicesData,
        servicesError,
        servicesLoading,
        servicesSetUrl,
        servicesRefresh
    ] = useFetch(
        API.PUBLIC.SERVICES.GET
    )


    const [
        platformsData,
        platformsError,
        platformsLoading,
        platformsSetUrl,
        platformsRefresh
    ] = useFetch(
        API.PUBLIC.PLATFORMS.GET
    )









    const [sortedServices, setSortedServices] = useState([])
    const [sortedCategories, setSortedCategories] = useState([])
    const [visibleCategories, setVisibleCategoires] = useState([])




    const [selectedPlatform, setSelectedPaltfrom] = useState(platformsData[0])
    const [selectedCategory, setSelectedCategory] = useState()



    useEffect(() => {
        setSelectedPaltfrom(platformsData[0])
    }, [platformsData])

    useEffect(() => {
        const catName = selectedPlatform?.name.toLowerCase().trim()



        const temp = servicesData.filter(item => {
            const targetCategory = item.category.toLowerCase().trim()

            if (targetCategory.includes(catName)) {
                return item
            }
        })


        const temCats = temp.map(item => {
            return item.category
        })


        const result = [...new Set(temCats)]


        const tempSortedCategories = result.map(item => {
            return {
                label: item,
                value: item
            }
        })

        tempSortedCategories.unshift({
            label: "All Categories",
            value: "All Categories"
        })

        setSortedCategories(tempSortedCategories)


        const final = result.map(cat => {

            const temp =
                servicesData.filter(ser => {
                    return ser.category === cat
                })

            return {
                category: cat,
                services: temp
            }
        })


        setSortedServices(final)


    }, [selectedPlatform, servicesData])

    useEffect(() => {


        let catName = selectedCategory?.value
        if (catName === "All Categories") {
            const catName = selectedPlatform?.name.toLowerCase().trim()



            const temp = servicesData.filter(item => {
                const targetCategory = item.category.toLowerCase().trim()

                if (targetCategory.includes(catName)) {
                    return item
                }
            })


            const temCats = temp.map(item => {
                return item.category
            })


            const result = [...new Set(temCats)]


            const tempSortedCategories = result.map(item => {
                return {
                    label: item,
                    value: item
                }
            })

            tempSortedCategories.unshift({
                label: "All Categories",
                value: "All Categories"
            })

            setSortedCategories(tempSortedCategories)


            const final = result.map(cat => {

                const temp =
                    servicesData.filter(ser => {
                        return ser.category === cat
                    })

                return {
                    category: cat,
                    services: temp
                }
            })


            setSortedServices(final)
            return
        }

        const temp = servicesData?.filter(item => {
            return item.category.includes(catName)
        })

        setSortedServices([
            {
                category: catName,
                services: temp
            }
        ])


    }, [selectedCategory])





    const onSearchInputChange = (e) => {
        const value = e.target.value.toLowerCase().trim()
        const temp = sortedServices.filter(record => {
            const category = record.category
            const services = record.services
            const findServices = services.filter(service => {
                const serviceName = service.name.toLowerCase().trim()
                return serviceName.includes(value)
            })

            if (findServices.length > 0) {
                return record
            }

        })

        setVisibleCategoires(temp)
    }


    const onPlatformClick = (platform) => {
        setSelectedPaltfrom(platform)
    }




    const customStyles = {
        container: provided => ({
            ...provided,
            width: 300
        })
    };




    return (
        <main className="services-page">
            <section className="poster">

                <div className="left">
                 
                    <img src={window.location.origin + "/8.svg"} alt="" />
                </div>

                <div className="right">
                    <h1>
                        UNLEASH YOUR <br />
                        <span> SOCIAL MEDIA</span> POTENTIAL <br />
                        WITH OUR <br />
                        <span>PREMIUM</span> SERVICES
                    </h1>
                    <p>
                        Ignite your social media potential with our expert services. Choose from a wide range of options to amplify your brand, connect with your audience, and unlock limitless opportunities. Take charge of your online presence and harness the unparalleled power of social media today.
                    </p>
                </div>

                <div className="poster-background">
                    <Lottie
                        className='primary-aniamtion'
                        animationData={servicesTextuareBackground}
                        play
                        loop />
                    <Wave fill='#f79902'
                        paused={false}
                        className='wave'
                        options={{
                            height: 100,
                            amplitude: 50,
                            speed: 0.1,
                            points: 5
                        }}
                    />
                </div>

            </section>


            <PopularServices platforms={platformsData} />


            <section className="search">
                <form className="right" action="#">
                    <div className="form-search">
                        <Icon icon="iconamoon:search" />
                        <input
                            onChange={onSearchInputChange}
                            type="text"
                            name="search"
                            placeholder="Instagram services...."
                        />


                    </div>
                    <div className="form-select-box">
                        <Select
                            styles={customStyles}

                            options={
                                sortedCategories
                            }
                            placeholder={
                                "------- Select Category ------- "}
                            isSearchable={true}
                            onChange={(e) => { setSelectedCategory(e) }}
                            defaultValue={sortedCategories[0]}
                        >
                        </Select>
                    </div>
                </form>
            </section>

            <section className="social-icons">



                {
                    !platformsLoading ? platformsData.map((platform, index) => {

                        return (

                            <div
                                className={`item ${platform === selectedPlatform}`}
                                key={platform._id}
                                onClick={() => { onPlatformClick(platform) }}
                            >
                                <div
                                    className="item-header">
                                    <img src={SERVER.BASE_URL + platform.image} />
                                </div>
                                <div
                                    className="item-body">
                                    {platform.name}
                                </div>
                            </div>
                        )

                    }) : <h1>Loading...</h1>
                }



            </section>

            <section className='avilable-services'>
                <Table
                    columnsStyle={"5rem 1fr 5rem 5rem 5rem 5rem 5rem"}
                >
                    <TableHeader>
                        {headerList.map((item, index) => {
                            return <ItemHeader key={index}>
                                {item}
                            </ItemHeader>
                        })}
                    </TableHeader>

                    <TableBody>

                        {
                            sortedServices?.map((cat, index) => {
                                return <TableCategory
                                    key={index}>
                                    <h1>{cat.category}</h1>
                                    {
                                        cat?.services?.map((service) => {
                                            return <Row
                                                headerList={headerList}
                                                key={service.service} >
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[0]}
                                                    </div>
                                                    <div className="property-body">
                                                        {service.service}
                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[1]}
                                                    </div>
                                                    <div className="property-body long">
                                                        <p>
                                                            {service.name}
                                                        </p>
                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[2]}
                                                    </div>
                                                    <div className="property-body">
                                                        ${service.rate}

                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[3]}
                                                    </div>
                                                    <div className="property-body">
                                                        {service.min}

                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[4]}
                                                    </div>
                                                    <div className="property-body">
                                                        {service.max}

                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[5]}
                                                    </div>
                                                    <div className="property-body">
                                                        N/A
                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[6]}
                                                    </div>
                                                    <div className="property-body">
                                                        Controlls
                                                    </div>
                                                </Property>
                                            </Row>
                                        })
                                    }

                                </TableCategory>
                            })
                        }





                    </TableBody>


                </Table>


            </section>

        </main>
    )
}

export default ServicesPage