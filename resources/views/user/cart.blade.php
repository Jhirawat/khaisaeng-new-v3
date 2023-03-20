@extends('layouts.main_user')

@section('style')
<style>
</style>
@endsection

@section('head')
<title>ตะกร้าสินค้า</title>
@endsection

@section('content')
<div class="2-columns ecommerce-application navbar-floating footer-static">
<div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
                <div class="content-header-left col-md-9 col-12 mb-2">
                    <div class="row breadcrumbs-top">
                        <div class="col-12">
                            <h2 class="content-header-title float-left mb-0">ตะกร้าสินค้า</h2>
                            <div class="breadcrumb-wrapper col-12">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">หน้าหลัก</a>
                                    </li>
                                    <li class="breadcrumb-item active">ตะกร้าสินค้า
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-body">
                <form action="#" class="icons-tab-steps checkout-tab-steps wizard-circle">
                    <!-- Checkout Place order starts -->
                    <h6><i class="step-icon step feather icon-shopping-cart"></i> ตะกร้าสินค้า</h6>
                    <fieldset class="checkout-step-1 px-0">
                        <section id="place-order" class="list-view product-checkout">
                            <div class="checkout-items">
                                <div class="card ecommerce-card">
                                    <div class="card-content">
                                        <div class="item-img text-center">
                                            <a href="app-ecommerce-details.html">
                                                <img src="../../../app-assets/images/pages/eCommerce/9.png" alt="img-placeholder">
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="item-name">
                                                <a href="app-ecommerce-details.html">Amazon - Fire TV Stick with Alexa Voice Remote - Black</a>
                                                <span></span>
                                            </div>
                                            <div class="item-quantity">
                                                <p class="quantity-title">Quantity</p>
                                                <div class="input-group quantity-counter-wrapper">
                                                    <input type="text" class="quantity-counter" value="1">
                                                </div>
                                            </div>
                                            <p class="delivery-date">รายละเอียดเพิ่มเติม</p>
                                        </div>
                                        <div class="item-options text-center">
                                            <div class="item-wrapper">
                                                <div class="item-cost">
                                                    <h6 class="item-price">
                                                        $39.99
                                                    </h6>
                                                    <p class="shipping">
                                                        <i class="feather icon-shopping-cart"></i> ส่งฟรี
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="wishlist remove-wishlist">
                                                <i class="feather icon-x align-middle"></i> ลบจากรายการ
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="checkout-options">
                                <div class="card">
                                    <div class="card-content">
                                        <div class="card-body">

                                            
                                            <div class="price-details">
                                                <p>Price Details</p>
                                            </div>
                                            <div class="detail">
                                                <div class="detail-title">
                                                    Total
                                                </div>
                                                <div class="detail-amt">
                                                    $598
                                                </div>
                                            </div>
                                            <div class="detail">
                                                <div class="detail-title">
                                                    Delivery Charges
                                                </div>
                                                <div class="detail-amt discount-amt">
                                                    Free
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="detail">
                                                <div class="detail-title detail-total">Total</div>
                                                <div class="detail-amt total-amt">$574</div>
                                            </div>
                                            <!-- <div class="btn btn-primary btn-block place-order">PLACE ORDER</div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </fieldset>
                    <!-- Checkout Place order Ends -->

                    <!-- Checkout Customer Address Starts -->
                    <h6><i class="step-icon step feather icon-home"></i> เลือกที่อยู่</h6>
                    <fieldset class="checkout-step-2 px-0">
                        <section id="checkout-address" class="list-view product-checkout">
                            <div class="card">
                                <div class="card-header flex-column align-items-start">
                                    <h4 class="card-title">เพิ่มที่อยู่ใหม่</h4>
                                    <!-- <p class="text-muted mt-25">Be sure to check "Deliver to this address" when you have finished</p> -->
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-name">ชื่อจริง:</label>
                                                    <input type="text" id="checkout-name" class="form-control required" name="fname">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-number">หมายเลขโทรศัพท์:</label>
                                                    <input type="number" id="checkout-number" class="form-control required" name="mnumber">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-apt-number">บ้านเลขที่:</label>
                                                    <input type="number" id="checkout-apt-number" class="form-control required" name="apt-number">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-landmark">รายละเอียดเพิ่มเติม:</label>
                                                    <input type="text" id="checkout-landmark" class="form-control required" name="landmark">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-city">ตำบล/อำเภอ:</label>
                                                    <input type="text" id="checkout-city" class="form-control required" name="city">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-pincode">รหัสไปรษณีย์:</label>
                                                    <input type="number" id="checkout-pincode" class="form-control required" name="pincode">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="checkout-state">จังหวัด:</label>
                                                    <input type="text" id="checkout-state" class="form-control required" name="state">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group">
                                                    <label for="add-type">ประเภทสถานที่:</label>
                                                    <select class="form-control" id="add-type">
                                                        <option>บ้าน</option>
                                                        <option>สำนักงาน</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 offset-md-6">
                                                <div class="btn btn-primary delivery-address float-right">
                                                    <a href="{{ route('checkout') }}" style="color:#FFFFFF;"> บันทึกที่อยู่ และ ตรวจสอบการชำระเงิน</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="customer-card">
                                <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">John Doe</h4>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body actions">
                                            <p class="mb-0">9447 Glen Eagles Drive</p>
                                            <p>Lewis Center, OH 43035</p>
                                            <p>UTC-5: Eastern Standard Time (EST) </p>
                                            <p>202-555-0140</p>
                                            <hr>
                                            <div class="btn btn-primary btn-block delivery-address">
                                                <a href="{{ route('checkout') }}" style="color:#FFFFFF;">เลือกที่อยู่นี้</a>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </fieldset>

                    <!-- Checkout Customer Address Ends -->
                </form>

            </div>
        </div>
    </div>
    </div>
    @endsection


    @section('script')

@endsection

