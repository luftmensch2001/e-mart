import {React, useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import Order from '../../components/Order'
import './BuyOrdersTab.css'
import StatusLabel from '../../components/StatusLabel'
import { AiOutlineSearch } from "react-icons/ai";
import productImage from '../../assets/images/products/5.jpg'
import productImage2 from '../../assets/images/products/product-290274-160922-071637-600x600.jpg'

const dataRaw = [
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML',
        productImg: productImage,
        count: 3,
        total: 465000,
        status: 1
    },
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML Lock&Lock 450ML',
        productImg: productImage2,
        count: 3,
        total: 465000,
        status: 2
    },
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML',
        productImg: productImage,
        count: 3,
        total: 465000,
        status: 3
    },
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML',
        productImg: productImage2,
        count: 3,
        total: 465000,
        status: 4
    },
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML',
        productImg: productImage,
        count: 3,
        total: 465000,
        status: 3
    },
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML',
        productImg: productImage2,
        count: 3,
        total: 465000,
        status: 3
    },
    {
        orderDate: '5/12/2022',
        productName: 'Bình Giữ Nhiệt Lock&Lock 450ML',
        productImg: productImage,
        count: 3,
        total: 465000,
        status: 3
    }
]

function BuyOrdersTab() {
    const [items, setItems]= useState(dataRaw);
    const [statusFilterValue, setStatusFilterValue] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [dateFilterValue, setDateFilterValue] = useState(1);

    function FilterByStatus(item) {
        return ((item.status + 1) === statusFilterValue);
    }

    useEffect(() => {
        setItems(statusFilterValue == 1 ? dataRaw : dataRaw.filter(FilterByStatus));
    },[statusFilterValue]);
    
    function StatusFilterOnchange(event) {
        switch (event.target.value) {
            case 'Tất cả':
                setStatusFilterValue(1);
                break;
            case 'Đang chờ xác nhận':
                setStatusFilterValue(2);
                break;
            case 'Đang vận chuyển':
                setStatusFilterValue(3);
                break;
            case 'Đã giao hàng':
                setStatusFilterValue(4);
                break;
            case 'Đã huỷ':
                setStatusFilterValue(5);
                break;
            default:
                break;
        }
    }

    function DateFilterOnchange(event) {
        switch (event.target.value) {
            case 'Tất cả':
                setDateFilterValue(1);
                break;
            case 'Hôm nay':
                setDateFilterValue(2);
                break;
            case 'Tuần này':
                setDateFilterValue(3);
                break;
            case 'Tháng này':
                setDateFilterValue(4);
                break;
            case 'Năm này':
                setDateFilterValue(5);
                break;
            default:
                break;
        }
    }

    function Items({ currentItems }) {
        const [searchValue, setSearchValue] = useState('');

        function FilterByName(item) {
            const productNameLow = item.productName.toLowerCase();
            console.log("productNameLow: ", productNameLow);
            const searchString = searchValue.toLowerCase();
            console.log("searchString: ", searchString);
            
            return (productNameLow.includes(searchString));
        }

        function SearchInputOnChange(event) {
            console.log(searchValue);
            setSearchValue(event.target.value);
            // setItems(items.filter(FilterByName));
        }
    
        return (
            <>
                <div className='top'>
                    <div className='search-container'>
                        <span className='top-label'>Tìm kiếm</span>
                        <div className='search-field'>
                            <AiOutlineSearch className='search-icon' />
                            <input className='seach-input' type='text' placeholder='Tìm kiếm đơn hàng' value={searchValue} onChange={SearchInputOnChange}/>
                        </div>
                    </div>
                    <div className='status-filter-container'>
                        <span className='top-label'>Trạng thái</span>
                        <select className='status-filter-select' onChange={StatusFilterOnchange}>
                            <option selected={statusFilterValue === 1 ? 'selected' : ''}>Tất cả</option>
                            <option selected={statusFilterValue === 2 ? 'selected' : ''}>Đang chờ xác nhận</option>
                            <option selected={statusFilterValue === 3 ? 'selected' : ''}>Đang vận chuyển</option>
                            <option selected={statusFilterValue === 4 ? 'selected' : ''}>Đã giao hàng</option>
                            <option selected={statusFilterValue === 5 ? 'selected' : ''}>Đã huỷ</option>
                        </select>
                    </div>
                    <div className='date-filter-container'>
                        <span className='top-label'>Thời gian đặt hàng</span>
                        <select className='date-filter-select' onChange={DateFilterOnchange}>
                            <option selected={dateFilterValue === 1 ? 'selected' : ''}>Tất cả</option>
                            <option selected={dateFilterValue === 2 ? 'selected' : ''}>Hôm nay</option>
                            <option selected={dateFilterValue === 3 ? 'selected' : ''}>Tuần này</option>
                            <option selected={dateFilterValue === 4 ? 'selected' : ''}>Tháng này</option>
                            <option selected={dateFilterValue === 5 ? 'selected' : ''}>Năm này</option>
                        </select>
                    </div>
                </div>
                <div className='bot'>
                    <div className='orders-header'>
                        <span className='orders-header-label c1'>Ngày đặt hàng</span>
                        <span className='orders-header-label c2'>Sản phẩm</span>
                        <span className='orders-header-label c3'>Số lượng</span>
                        <span className='orders-header-label c4'>Tổng thanh toán</span>
                        <span className='orders-header-label c5'>Trạng thái</span>
                    </div>
                    <div className='orders-list'>
                        {currentItems &&
                            currentItems.map((item) => (
                                <Order data={item} />
                        ))}
                    </div>
                </div>
            </>

          
        );
    }

    function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName='pag-container'
          pageClassName='pag-li'
          pageLinkClassName='pag-link'
          previousClassName='pag-previous'
          previousLinkClassName='pag-link-previous'
          nextClassName='pag-next'
          nextLinkClassName='pag-link-next'
          activeClassName='pag-active'
          activeLinkClassName='pag-link-active'
          breakClassName = 'pag-break'
          breakLinkClassName = 'pag-link-break'
        />
      </>
    );
    }
    
    return (
        <div className='BuyOrdersTab'>
            <PaginatedItems itemsPerPage={4} />
        </div>
    )
}

export default BuyOrdersTab