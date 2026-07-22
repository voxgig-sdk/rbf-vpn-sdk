package core

type RbfVpnError struct {
	IsRbfVpnError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRbfVpnError(code string, msg string, ctx *Context) *RbfVpnError {
	return &RbfVpnError{
		IsRbfVpnError: true,
		Sdk:              "RbfVpn",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RbfVpnError) Error() string {
	return e.Msg
}
