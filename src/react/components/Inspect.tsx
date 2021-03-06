import * as React from "react";

import { SwiperSlide } from "./SwiperSlide";

//检查组件
export class Inspect extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { Phonecheck: false, Phone: "18611111111" };
        this.handleChange = this.handleChange.bind(this);
        this.onInspect = this.onInspect.bind(this);
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(prevState => ({
            Phone: value,
            Phonecheck: value.length > 0 && !/^1[34578]\d{9}$/.test(value)
        }));
    }
    onInspect() {
        if (!this.state.Phonecheck && /^1[34578]\d{9}$/.test(this.state.Phone)) {
            layer.open({ type: 2 });
            fetch("/api/verifyCellPhone").then(response => response.json())
                .then(data => {
                    layer.closeAll();
                    console.log("/api/verifyCellPhone", data);
                    if (data.Data.Phone == this.state.Phone) {
                        this.props.onCheckThrough("FillIn");
                    } else {
                        layer.open({
                            content: '请输入正确的手机号'
                            , btn: '我知道了'
                        });
                    }
                })
                .catch(e => {
                    console.log("Oops, error", e);
                    layer.closeAll();
                });
        } else {
            layer.open({
                content: '请输入正确的手机号'
                , btn: '我知道了'
            });
        }

    }
    render() {

        return <SwiperSlide className="swiper-slide swiper-conter">
            <div className="container minH500">
                <div className="header entry_login">
                    <h4>员工信息录入</h4>
                </div>
                <div className="form-hor-Login">
                    {/*<h4 className="mt20 mb20">验证手机号</h4>*/}

                    <div className={this.state.Phonecheck ? 'form-group row has-error' : 'form-group row'}>
                        <label className="col-lg-4 control-label">手机号</label>
                        <div className="col-lg-4">
                            <input type="text" className="form-control" name="phone" value={this.state.Phone} onChange={this.handleChange} />
                            {/*{
                                this.state.Phonecheck &&
                                <span className="help-block">请输入正确的手机号</span>
                               
                            }                            */}
                            <span className="ft14 ce9 fl mt10 mb10"><span className=""> * </span>验证手机号</span>
                        </div>
                        <div className="col-lg-4 text-l">
                            {
                                this.state.Phonecheck &&
                                <span className="help-block ft16">请输入正确的手机号</span>

                            }
                        </div>
                    </div>
                    <div className="form-group row text-center">
                        <button type="submit" className="btn btn-danger" onClick={this.onInspect}>检查手机号</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
            ;
    }
}