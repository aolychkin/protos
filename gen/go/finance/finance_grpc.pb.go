// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             v5.28.2
// source: finance/finance.proto

package finv1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	FundConfig_CreateFund_FullMethodName  = "/finance.FundConfig/CreateFund"
	FundConfig_AddChild_FullMethodName    = "/finance.FundConfig/AddChild"
	FundConfig_AddGoal_FullMethodName     = "/finance.FundConfig/AddGoal"
	FundConfig_GetFund_FullMethodName     = "/finance.FundConfig/GetFund"
	FundConfig_GetFundTree_FullMethodName = "/finance.FundConfig/GetFundTree"
)

// FundConfigClient is the client API for FundConfig service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FundConfigClient interface {
	CreateFund(ctx context.Context, in *CreateFundRequest, opts ...grpc.CallOption) (*CreateFundResponse, error)
	AddChild(ctx context.Context, in *AddChildRequest, opts ...grpc.CallOption) (*AddChildResponse, error)
	AddGoal(ctx context.Context, in *AddGoalRequest, opts ...grpc.CallOption) (*AddGoalResponse, error)
	GetFund(ctx context.Context, in *GetFundRequest, opts ...grpc.CallOption) (*GetFundResponse, error)
	GetFundTree(ctx context.Context, in *GetFundTreeRequest, opts ...grpc.CallOption) (*GetFundTreeResponse, error)
}

type fundConfigClient struct {
	cc grpc.ClientConnInterface
}

func NewFundConfigClient(cc grpc.ClientConnInterface) FundConfigClient {
	return &fundConfigClient{cc}
}

func (c *fundConfigClient) CreateFund(ctx context.Context, in *CreateFundRequest, opts ...grpc.CallOption) (*CreateFundResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateFundResponse)
	err := c.cc.Invoke(ctx, FundConfig_CreateFund_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fundConfigClient) AddChild(ctx context.Context, in *AddChildRequest, opts ...grpc.CallOption) (*AddChildResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AddChildResponse)
	err := c.cc.Invoke(ctx, FundConfig_AddChild_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fundConfigClient) AddGoal(ctx context.Context, in *AddGoalRequest, opts ...grpc.CallOption) (*AddGoalResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AddGoalResponse)
	err := c.cc.Invoke(ctx, FundConfig_AddGoal_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fundConfigClient) GetFund(ctx context.Context, in *GetFundRequest, opts ...grpc.CallOption) (*GetFundResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetFundResponse)
	err := c.cc.Invoke(ctx, FundConfig_GetFund_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fundConfigClient) GetFundTree(ctx context.Context, in *GetFundTreeRequest, opts ...grpc.CallOption) (*GetFundTreeResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetFundTreeResponse)
	err := c.cc.Invoke(ctx, FundConfig_GetFundTree_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FundConfigServer is the server API for FundConfig service.
// All implementations must embed UnimplementedFundConfigServer
// for forward compatibility.
type FundConfigServer interface {
	CreateFund(context.Context, *CreateFundRequest) (*CreateFundResponse, error)
	AddChild(context.Context, *AddChildRequest) (*AddChildResponse, error)
	AddGoal(context.Context, *AddGoalRequest) (*AddGoalResponse, error)
	GetFund(context.Context, *GetFundRequest) (*GetFundResponse, error)
	GetFundTree(context.Context, *GetFundTreeRequest) (*GetFundTreeResponse, error)
	mustEmbedUnimplementedFundConfigServer()
}

// UnimplementedFundConfigServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedFundConfigServer struct{}

func (UnimplementedFundConfigServer) CreateFund(context.Context, *CreateFundRequest) (*CreateFundResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateFund not implemented")
}
func (UnimplementedFundConfigServer) AddChild(context.Context, *AddChildRequest) (*AddChildResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddChild not implemented")
}
func (UnimplementedFundConfigServer) AddGoal(context.Context, *AddGoalRequest) (*AddGoalResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddGoal not implemented")
}
func (UnimplementedFundConfigServer) GetFund(context.Context, *GetFundRequest) (*GetFundResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFund not implemented")
}
func (UnimplementedFundConfigServer) GetFundTree(context.Context, *GetFundTreeRequest) (*GetFundTreeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFundTree not implemented")
}
func (UnimplementedFundConfigServer) mustEmbedUnimplementedFundConfigServer() {}
func (UnimplementedFundConfigServer) testEmbeddedByValue()                    {}

// UnsafeFundConfigServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FundConfigServer will
// result in compilation errors.
type UnsafeFundConfigServer interface {
	mustEmbedUnimplementedFundConfigServer()
}

func RegisterFundConfigServer(s grpc.ServiceRegistrar, srv FundConfigServer) {
	// If the following call pancis, it indicates UnimplementedFundConfigServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&FundConfig_ServiceDesc, srv)
}

func _FundConfig_CreateFund_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateFundRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FundConfigServer).CreateFund(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FundConfig_CreateFund_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FundConfigServer).CreateFund(ctx, req.(*CreateFundRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FundConfig_AddChild_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddChildRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FundConfigServer).AddChild(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FundConfig_AddChild_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FundConfigServer).AddChild(ctx, req.(*AddChildRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FundConfig_AddGoal_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddGoalRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FundConfigServer).AddGoal(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FundConfig_AddGoal_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FundConfigServer).AddGoal(ctx, req.(*AddGoalRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FundConfig_GetFund_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFundRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FundConfigServer).GetFund(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FundConfig_GetFund_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FundConfigServer).GetFund(ctx, req.(*GetFundRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FundConfig_GetFundTree_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFundTreeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FundConfigServer).GetFundTree(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FundConfig_GetFundTree_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FundConfigServer).GetFundTree(ctx, req.(*GetFundTreeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FundConfig_ServiceDesc is the grpc.ServiceDesc for FundConfig service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FundConfig_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "finance.FundConfig",
	HandlerType: (*FundConfigServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateFund",
			Handler:    _FundConfig_CreateFund_Handler,
		},
		{
			MethodName: "AddChild",
			Handler:    _FundConfig_AddChild_Handler,
		},
		{
			MethodName: "AddGoal",
			Handler:    _FundConfig_AddGoal_Handler,
		},
		{
			MethodName: "GetFund",
			Handler:    _FundConfig_GetFund_Handler,
		},
		{
			MethodName: "GetFundTree",
			Handler:    _FundConfig_GetFundTree_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "finance/finance.proto",
}
