@extends('layouts.main_user')

@section('style')
    <style>
        .navbar-floating .header-navbar-shadow {
            display: block;
            background: linear-gradient(180deg, #524f4f00 44%, rgb(248 248 248 / 0%) 73%, rgba(255, 255, 255, 0)) !important;
            padding-top: 2.2rem;
            background-repeat: repeat;
            width: 100%;
            height: 102px;
            position: fixed;
            top: 0;
            z-index: 11;
        }
    </style>
@endsection

@section('content')
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
                {{-- start form --}}
                <div class="container-fluid mt-2">
                    <div class="row mb-2">
                        <div class="col-sm-6 ">
                            <section id="basic-horizontal-layouts">
                                <div class="row match-height">
                                    <div class="card">
                                        <div class="card-header flex-column align-items-start">
                                            <h4 class="card-title">ชำระเงินผ่าน QRcode</h4>
                                            <p class="text-muted mt-25">กรุณาสแกน QRcode ด้านล่างกรุณาชำระเงินตามยอดและ
                                                อัพโหลดหลักฐานการชำระเงิน</p>
                                        </div>
                                        <div class="card  text-center ">
                                            <div class="card-content d-flex">
                                                <div class="card-body">
                                                    <img src="https://media.discordapp.net/attachments/799534657523154967/1070204450083455016/320536374_514244424134923_4636217947386253321_n.jpg?width=481&height=701"
                                                        alt="element 06" height="450" class="mb-1">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <h4 class="card-title">กรุณาอัพโหลดหลักฐานการโอนเงิน</h4>
                                        </div>
                                        <div class="card-content">
                                            <div class="card-body">
                                                <form class="form form-horizontal">
                                                    <div class="form-body">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <div class="form-group row">
                                                                    <div class="col-md-4">
                                                                        <span>หลักฐานการโอน :</span>
                                                                    </div>

                                                                    {{--
                                                                        <div class="col-sm-6">
                                                                            <div class="form-group">
                                                                                <label for="name"
                                                                                    class="form-label">ชื่อรายการสินค้า
                                                                                </label>
                                                                                <input type="text" class="form-control"
                                                                                    name="name"
                                                                                    placeholder="ชื่อรายการสินค้า" />
                                                                            </div>
                                                                        </div>
                                                                         --}}
                                                                    <div class="col-md-8">
                                                                        <div class="position-relative has-icon-left">
                                                                            {{-- <input type="text" id="fname-icon" class="form-control" name="fname-icon" placeholder="First Name">
                                                                                <div class="form-control-position">
                                                                                    <i class="feather icon-user"></i>
                                                                                </div> --}}
                                                                            {{-- <label for="image"
                                                                                class="form-label">รูป</label> --}}
                                                                            <input type="file" class="form-control"
                                                                                name="image"
                                                                                placeholder="กดเพื่ออัพโหลรูป" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-group row">
                                                                    <div class="col-md-4">
                                                                        <span>วันที่ชำระเงิน :</span>
                                                                    </div>
                                                                    <div class="col-md-8">
                                                                        <div class="position-relative has-icon-left">
                                                                            <input type="email" id="email-icon"
                                                                                class="form-control" name="email-id-icon"
                                                                                placeholder="Email">
                                                                            <div class="form-control-position">
                                                                                <i class="feather icon-mail"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-group row">
                                                                    <div class="col-md-4">
                                                                        <span>เวลที่โอนเงิน :</span>
                                                                    </div>
                                                                    <div class="col-md-8">
                                                                        <div class="position-relative has-icon-left">
                                                                            <input type="number" id="contact-icon"
                                                                                class="form-control" name="contact-icon"
                                                                                placeholder="Mobile">
                                                                            <div class="form-control-position">
                                                                                <i class="feather icon-smartphone"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12">
                                                                <div class="form-group row">
                                                                    <div class="col-md-4">
                                                                        <span>จำนวนเงิน :</span>
                                                                    </div>
                                                                    <div class="col-md-8">
                                                                        <div class="position-relative has-icon-left">
                                                                            <input type="number" id="contact-icon"
                                                                                class="form-control" name="contact-icon"
                                                                                placeholder="Mobile">
                                                                            <div class="form-control-position">
                                                                                <i class="feather icon-smartphone"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>




                                                            <div class="col-md-8 offset-md-4">
                                                                <button type="submit"
                                                                    class="btn btn-primary mr-1 mb-1">Submit</button>
                                                                <button type="reset"
                                                                    class="btn btn-outline-warning mr-1 mb-1">Reset</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                        </div><!-- /.col -->
                    </div><!-- /.row -->

                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script>
   
    </script>
@endsection
