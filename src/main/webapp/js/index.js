/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function checkState() {
    switch (estado) {
        case 0:
            $("#nuevo-btn").jqxToggleButton({toggled: false});
            $("#editar-btn").jqxToggleButton({toggled: false});
            $("#borrar-btn").jqxToggleButton({toggled: false});
            $("#guardar-btn").jqxToggleButton({toggled: false});

            break;
        case 1:
            $("#nuevo-btn").jqxToggleButton({toggled: true});
            $("#editar-btn").jqxToggleButton({toggled: false});
            $("#borrar-btn").jqxToggleButton({toggled: false});
            $("#guardar-btn").jqxToggleButton({toggled: false});
            break;
        case 2:
            $("#nuevo-btn").jqxToggleButton({toggled: false});
            $("#editar-btn").jqxToggleButton({toggled: true});
            $("#borrar-btn").jqxToggleButton({toggled: false});
            $("#guardar-btn").jqxToggleButton({toggled: false});
            break;
        case 3:
            $("#nuevo-btn").jqxToggleButton({toggled: false});
            $("#editar-btn").jqxToggleButton({toggled: false});
            $("#borrar-btn").jqxToggleButton({toggled: true});
            $("#guardar-btn").jqxToggleButton({toggled: false});
            break;
        case 4:
            $("#nuevo-btn").jqxToggleButton({toggled: false});
            $("#editar-btn").jqxToggleButton({toggled: false});
            $("#borrar-btn").jqxToggleButton({toggled: false});
            $("#guardar-btn").jqxToggleButton({toggled: true});
            break;
    }
}
function nav() {
    var theme = getDemoTheme();
    $("#client-btn").jqxButton({width: '100', height: '30', theme: theme});
    $("#prod-btn").jqxButton({width: '100', height: '30', theme: theme});
    $("#vent-btn").jqxButton({width: '100', height: '30', theme: theme});
    $("#pag-btn").jqxButton({width: '100', height: '30', theme: theme});
    $("#client-btn").on('click', function() {
        router.navigate('clientes', {trigger: true});
    });
    $("#prod-btn").on('click', function() {
        router.navigate('productos', {trigger: true});
    });
    $("#vent-btn").on('click', function() {
        router.navigate('ventas', {trigger: true});
    });
    $("#pag-btn").on('click', function() {
        router.navigate('pagos', {trigger: true});
    });

}
function clients() {
    var theme = getDemoTheme();
    $("#c-nombre").jqxInput({placeHolder: "Nombre", height: 20, width: 150, minLength: 1, theme: theme});
    $("#c-ci").jqxInput({placeHolder: "Cédula", height: 20, width: 150, minLength: 1, theme: theme});
    $("#c-tel").jqxInput({placeHolder: "Teléfono", height: 20, width: 150, minLength: 1, theme: theme});
    $("#c-dir").jqxInput({placeHolder: "Dirección", height: 20, width: 150, minLength: 1, theme: theme});
    $('#cliente-form').jqxValidator({
        rules: [
            {input: '#c-nombre', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            {input: '#c-ci', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            {input: '#c-tel', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            {input: '#c-ci', message: 'Debe ser un valor numerico!', action: 'keyup, blur', rule: function(input, commit) {
                    var value = $("#c-ci").jqxInput('value');
                    return isNumber(value);
                }},
            {input: '#c-dir', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'}
        ],
        theme: theme
    });
    $("#table-clientes").jqxGrid(
            {
                width: 580,
                height: 350,
                source: getAdapter(),
                theme: theme,
                sortable: true,
                columns: [
                    {text: 'ID', datafield: 'id', width: 100},
                    {text: 'Nombre', datafield: 'nombre', width: 100},
                    {text: 'CI', datafield: 'ci', width: 100},
                    {text: 'Telefono', datafield: 'telefono', width: 100},
                    {text: 'Direccion', datafield: 'direccion', width: 180}
                ]
            });
}
function products() {
    var theme = getDemoTheme();
    var data = '[]';
    $("#p-nombre").jqxInput({placeHolder: "Producto", height: 20, width: 150, minLength: 1, theme: theme});
    $("#p-precio").jqxInput({placeHolder: "Precio", height: 20, width: 150, minLength: 1, theme: theme});
    $("#p-desc").jqxInput({placeHolder: "Descripcion", height: 20, width: 150, minLength: 1, theme: theme});
    $("#p-stock").jqxInput({placeHolder: "Cantidad", height: 20, width: 150, minLength: 1, theme: theme});
    $('#producto-form').jqxValidator({
        rules: [
            {input: '#p-nombre', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            {input: '#p-precio', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            {input: '#p-precio', message: 'Debe ser un valor numerico!', action: 'keyup, blur', rule: function(input, commit) {
                    var value = $("#p-precio").jqxInput('value');
                    return isNumber(value);
                }},
            {input: '#p-stock', message: 'Debe ser un valor numerico!', action: 'keyup, blur', rule: function(input, commit) {
                    var value = $("#p-precio").jqxInput('value');
                    return isNumber(value);
                }},
            {input: '#p-desc', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'}
        ],
        theme: theme
    });
    $("#table-productos").jqxGrid(
            {
                width: 560,
                height: 350,
                source: getAdapter(),
                theme: theme,
                filterable: true,
                showfilterrow: true,
                sortable: true,
                columns: [
                    {text: 'ID', datafield: 'id', width: 100},
                    {text: 'Producto', datafield: 'nombre', width: 100},
                    {text: 'Descripcion', datafield: 'descripcion', width: 180},
                    {text: 'Precio', datafield: 'costo', width: 80, cellsalign: 'right', filtertype: "number"},
                    {text: 'Stock', datafield: 'stock', width: 80, cellsalign: 'right', filtertype: "number"}
                ]
            });
}
function sales() {
    var theme = getDemoTheme();
    $("#v-date").jqxDateTimeInput({width: '120', height: '20px', theme: theme});
    $('#v-date').jqxDateTimeInput('disabled', true);
    var sourceClient =
            {
                datatype: "json",
                datafields:
                        [
                            {name: 'id', type: 'number'},
                            {name: 'ci', type: 'string'},
                            {name: 'nombre', type: 'string'},
                            {name: 'telefono', type: 'string'},
                            {name: 'direccion', type: 'string'}
                        ],
                type: "GET",
                url: "webresources/clientes"
            };
    var clientDataAdapter = new $.jqx.dataAdapter(sourceClient, {
        formatData: function(data) {
            if ($("#v-cliente").jqxComboBox('searchString') !== undefined) {
                data.name_startsWith = $("#v-cliente").jqxComboBox('searchString');
                return data;
            }
        }
    });
    $("#v-cliente").jqxComboBox(
            {
                width: 120,
                height: 20,
                source: clientDataAdapter,
                autoComplete: true,
                searchMode: 'startswithignorecase',
                autoDropDownHeight: true,
                theme: theme,
                displayMember: "descripcion",
                valueMember: "nombre",
                disabled: true,
                renderer: function(index, label, value) {
                    var item = clientDataAdapter.records[index];
                    if (item !== null) {
                        var label = "<b>" + item.nombre + "</b> - CIN: " + item.ci;
                        return label;
                    }
                    return "";
                },
                renderSelectedItem: function(index, item)
                {
                    var item = clientDataAdapter.records[index];
                    if (item !== null && item !== undefined) {
                        var label = item.nombre;
                        return label;
                    }
                    return "";
                },
                search: function(searchString) {
                    clientDataAdapter.dataBind();
                }
            });
    $("#v-cliente").on('close', function(event) {
        var item = $("#v-cliente").jqxComboBox('getSelectedItem');
        if (item !== undefined) {
            if (item !== null) {
                $('#v-cnombre').val(item.originalItem.nombre);
                $('#v-cci').val(item.originalItem.ci);

            }
        }
    });
    
    $("#v-cnombre").jqxInput({placeHolder: "Nombre", height: 20, width: 150, minLength: 1, theme: theme, disabled: true});
    $("#v-cci").jqxInput({placeHolder: "CI", height: 20, width: 150, minLength: 1, theme: theme, disabled: true});
    var data = '[]';

    var sourceProductos =
            {
                localdata: data,
                datatype: "json",
                datafields:
                        [
                            {name: 'id', type: 'number'},
                            {name: 'costo', type: 'string'},
                            {name: 'nombre', type: 'string'},
                            {name: 'descripcion', type: 'number'},
                            {name: 'total', type: 'number'},
                            {name: 'action', type: 'string'}
                        ],
                deleterow: function(rowid, commit) {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    //and with parameter false if the synchronization failed.
                    commit(true);
                },
                addrow: function(rowid, rowdata, position, commit) {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    //and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                }
            };

    var productosDataAdapter = new $.jqx.dataAdapter(sourceProductos);
    var productosDataAdapter2 = function() {
        var sourceProductos2 =
                {
                    datatype: "json",
                    datafields:
                            [
                                {name: 'id', type: 'number'},
                                {name: 'costo', type: 'string'},
                                {name: 'nombre', type: 'string'},
                                {name: 'descripcion', type: 'number'}
                            ],
                    type: 'GET',
                    url: 'webresources/productos'
                };
        return new $.jqx.dataAdapter(sourceProductos2);
    };
    $("#v-prod").jqxComboBox(
            {
                width: 150,
                height: 20,
                source: productosDataAdapter2(),
                autoComplete: true,
                searchMode: 'startswithignorecase',
                autoDropDownHeight: true,
                theme: theme,
                displayMember: "nombre",
                valueMember: "nombre",
                renderer: function(index, label, value) {
                    var item = this.source.records[index];
                    if (item !== null && item !== undefined) {
                        var label = "<b>" + item.nombre + "</b> - Precio: " + item.costo;
                        return label;
                    }
                    return "";
                },
                renderSelectedItem: function(index, item)
                {
                    var item = this.source.records[index];
                    if (item !== null && item !== undefined) {
                        var label = item.nombre;
                        return label;
                    }
                    return "";
                },
                search: function(searchString) {
                    productosDataAdapter2.dataBind();
                }
            });
    $("#v-detalle").jqxGrid(
            {
                width: 500,
                height: 350,
                source: productosDataAdapter,
                theme: theme,
                showstatusbar: true,
                statusbarheight: 20,
                showaggregates: true,
                //sortable: true,
                disabled: true,
                columns: [
                    {text: 'Cod.', datafield: 'id', width: 100},
                    {text: 'Producto', datafield: 'nombre', width: 100},
                    {text: 'Cantidad', datafield: 'cantidad', width: 80},
                    {text: 'Precio', datafield: 'costo', width: 80, cellsalign: 'right'},
                    {text: 'Total', datafield: 'total', width: 100, cellsalign: 'right', aggregates: [{'<b>Total</b>':
                                        function(aggregatedValue, currentValue, column, record) {
                                            var total = currentValue;
                                            return aggregatedValue + total;
                                        }}]},
                    {text: ' ', datafield: 'action', columntype: 'button', width: 20, cellsrenderer: function(x) {
                            return "x";
                        },
                        buttonclick: function(row) {
                            var selectedrowindex = $("#v-detalle").jqxGrid('getselectedrowindex');
                            var rowscount = $("#v-detalle").jqxGrid('getdatainformation').rowscount;
                            if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                                var n = $("#v-detalle").jqxGrid('getrowid', selectedrowindex);
                                var commit = $("#v-detalle").jqxGrid('deleterow', n);
                            }
                        }}
                ]
            });

    $('#v-prod').on('select', function(event) {
        var args = event.args;
        if (args != undefined) {
            var item = event.args.item;
            if (item != null) {
                $('#v-pid').val(item.originalItem.id);
                $('#v-pnombre').val(item.originalItem.nombre);
                $('#v-pprecio').val(item.originalItem.costo);
                $('#v-pdescripcion').val(item.originalItem.descripcion);

            }
        }
    });
    $("#v-pid").jqxInput({placeHolder: "Id", height: 20, width: 150, minLength: 1, theme: theme, disabled: true});
    $("#v-pnombre").jqxInput({placeHolder: "Nombre", height: 20, width: 150, minLength: 1, theme: theme, disabled: true});
    $("#v-pprecio").jqxInput({placeHolder: "Precio", height: 20, width: 150, minLength: 1, theme: theme, disabled: true});
    $("#v-pcantidad").jqxNumberInput({min: 1, decimalDigits: 0, inputMode: 'simple', width: '150', height: '20', theme: theme, spinButtons: true, decimal: 1});
    $("#v-pdescripcion").jqxInput({placeHolder: "Descripcion", height: 20, width: 150, minLength: 1, theme: theme, disabled: true});
    $("#v-pguardar").jqxButton({width: '80', height: '20', theme: theme});
    $("#v-pguardar").on('click', function() {
        console.log(id);
        var data = {};
        data["id"] = $("#v-pid").val();
        console.log("PROD:"+$("#v-pid").val());
        data["nombre"] = $("#v-pnombre").val();
        data["costo"] = $("#v-pprecio").val();
        data["cantidad"] = $("#v-pcantidad").val();
        data["total"] = $("#v-pprecio").val() * $("#v-pcantidad").val();
        var commit = $("#v-detalle").jqxGrid('addrow', null, data);
        console.log(id);
        $("#v-popupProd").jqxWindow('hide');
        
    });
    $("#v-pcancelar").jqxButton({width: '80', height: '20', theme: theme});
    $("#v-paddrow").jqxButton({width: '23', height: '23', theme: theme, disabled: true});
    $("#v-popupProd").jqxWindow({
        width: 280, height: 200, resizable: false, theme: theme, isModal: true, autoOpen: false, cancelButton: $("#v-pcancelar"), modalOpacity: 0.03, draggable: false
    });
    $("#v-paddrow").on('click', function() {
        if ($('#v-paddrow').jqxButton('disabled'))
            return;
        var offset = $("#v-detalle").offset();

        $("#v-prod").jqxComboBox('source',productosDataAdapter2());
        $("#v-popupProd").jqxWindow({position: {x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60}});
        // get the clicked row's data and initialize the input fields.

        $("#v-popupProd").jqxWindow('open');
    });
    $("#table-ventas").jqxGrid(
            {
                width: 500,
                height: 400,
                source: getAdapter(),
                theme: theme,
                filterable: true,
                showfilterrow: true,
                sortable: true,
                columns: [
                    {text: 'ID', datafield: 'id', width: 100, cellsalign: 'right', filtertype: "number"},
                    {text: 'Cliente', datafield: 'cliNombre', width: 100},
                    {text: 'CI', datafield: 'cliCI', width: 100},
                    {text: 'Fecha', datafield: 'fecha', width: 100, cellsformat: 'd' },
                    {text: 'Total', datafield: 'total', width: 80, cellsalign: 'right', filtertype: "number"}
                ]
            });
}
function payments(){
    var theme = getDemoTheme();
    $("#pg-idVenta").jqxInput({placeHolder: "venta", height: 20, width: 150, minLength: 1, theme: theme});
    //$("#pg-fecha").jqxInput({placeHolder: "fecha", height: 20, width: 150, minLength: 1, theme: theme});
    //$("#pg-monto").jqxInput({placeHolder: "monto", height: 20, width: 150, minLength: 1, theme: theme});
    $('#pago-form').jqxValidator({
        rules: [
            //{input: '#pg-fecha', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            {input: '#pg-idVenta', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            //{input: '#pg-monto', message: 'No puede estar vacio!', action: 'keyup, blur', rule: 'required'},
            /*{input: '#pg-monto', message: 'Debe ser un valor numerico!', action: 'keyup, blur', rule: function(input, commit) {
                    var value = $("#pg-monto").jqxInput('value');
                    return isNumber(value);
                }}*/
            
        ],
        theme: theme
    });
    $("#table-pagos").jqxGrid(
            {
                width: 400,
                height: 350,
                source: getAdapter(),
                theme: theme,
                sortable: true,
                columns: [
                    {text: 'ID', datafield: 'id', width: 100},
                    {text: 'Venta', datafield: 'idVenta', width: 100},
                    {text: 'Fecha', datafield: 'fecha', width: 100},
                    {text: 'Monto', datafield: 'monto', width: 100} 
                ]
            });
}
function options() {
    var theme = getDemoTheme();

    $("#nuevo-btn").jqxToggleButton({width: '100', toggled: false, theme: theme});
    $("#editar-btn").jqxToggleButton({width: '100', toggled: false, theme: theme});
    $("#borrar-btn").jqxToggleButton({width: '100', toggled: false, theme: theme});
    $("#guardar-btn").jqxToggleButton({width: '100', toggled: false, theme: theme});
    $("#guardar-btn").on('click', function() {
        if (estado === 4) {
            checkState();
            return;
        }
        if (!guardar())
            return;
        clean();
        formEnabled(false);
        estado = 4;
        checkState();
    });
    $("#nuevo-btn").on('click', function() {
        clean();
        estado = 1;
        formEnabled(true);
        
        checkState();
    });
    $("#borrar-btn").on('click', function() {
        clean();
        formEnabled(false);
        borrar();

        checkState();
    });
    $("#editar-btn").on('click', function() {
        formEnabled(true);
        clean();
        editar();
        checkState();
    });
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var estado = 0;
var id = -1;
var idV = -1;
var getAdapter = function() {
};
var editar = function() {
};
var guardar = function() {
};
var borrar = function() {
};
var formEnabled = function(val) {
};
var clean = function() {
};
var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'productos': 'productos',
        'clientes': 'clientes',
        'ventas': 'ventas',
        'pagos': 'pagos'
    }
});
var router = new Router();

var Navegacion = Backbone.View.extend({
    el: '#navigation-container',
    render: function() {
        var temp = _.template($("#nav-temp").html(), {});
        this.$el.html(temp);
        nav();
    }
});
var Opciones = Backbone.View.extend({
    el: '#option-container',
    render: function() {
        var temp = _.template($("#options-temp").html(), {});
        this.$el.html(temp);
        options();
    }

});
var ClientesTable = Backbone.View.extend({
    el: '#table-container',
    render: function() {
        temp = _.template($("#tabla-client-temp").html(), {});
        this.$el.html(temp);
    }
});
var clientesTable = new ClientesTable();
var Clientes = Backbone.View.extend({
    el: '#form-container',
    render: function() {
        getAdapter = function() {
            var source =
                    {
                        datatype: "json",
                        datafields:
                                [
                                    {name: 'id', type: 'number'},
                                    {name: 'nombre', type: 'string'},
                                    {name: 'ci', type: 'string'},
                                    {name: 'telefono', type: 'string'},
                                    {name: 'direccion', type: 'string'}
                                ],
                        type: "GET",
                        url: "webresources/clientes",
                        addrow: function(rowid, rowdata, position, commit) {
                            // synchronize with the server - send insert command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                            commit(true);
                        },
                        deleterow: function(rowid, commit) {
                            // synchronize with the server - send delete command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            commit(true);
                        },
                        updaterow: function(rowid, newdata, commit) {
                            // synchronize with the server - send update command
                            // call commit with parameter true if the synchronization with the server is successful 
                            // and with parameter false if the synchronization failed.
                            commit(true);
                        }
                    };
            return new $.jqx.dataAdapter(source);
        };
        editar = function(row) {
            var row = $("#table-clientes").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-clientes").jqxGrid('getdatainformation').rowscount;

            if (row < 0 || row >= rowCount) {

                //editar(row);
                return;
            }
            estado = 2;
            var data = $("#table-clientes").jqxGrid('getrowdata', row);
            $("#c-nombre").val(data.nombre);
            $("#c-ci").val(data.ci);
            $("#c-tel").val(data.telefono);
            $("#c-dir").val(data.direccion);
            id = data.id;
        };

        borrar = function() {
            var row = $("#table-clientes").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-clientes").jqxGrid('getdatainformation').rowscount;
            if (row < 0 || row >= rowCount) {

                return;
            }
            estado = 3;

            var data = $("#table-clientes").jqxGrid('getrowdata', row);
            if (confirm("Desea Borrar el Cliente " + data.nombre + "?")) {
                $.ajax({
                    url: 'webresources/clientes/' + data.id,
                    type: 'DELETE',
                    success: function(result) {
                        $("#table-clientes").jqxGrid({source: getAdapter()});
                    }
                });
            }
            row = -1;
        };
        guardar = function() {
            if ($('#cliente-form').jqxValidator('validate')) {
                var nombre = $("#c-nombre").val();
                var ci = $("#c-ci").val();
                var telefono = $("#c-tel").val();
                var direccion = $("#c-dir").val();
                var data = {
                    'nombre': nombre,
                    'ci': ci,
                    'telefono': telefono,
                    'direccion': direccion
                };
                if (estado === 2) {
                    $.ajax({
                        url: 'webresources/clientes/' + id,
                        type: 'PUT',
                        data: JSON.stringify(data),
                        dataType: 'json',
                        success: function(result) {
                            $("#table-clientes").jqxGrid({source: getAdapter()});
                        }
                    });
                } else {
                    $.post("webresources/clientes", data, function() {
                        $("#table-clientes").jqxGrid({source: getAdapter()});
                    }, 'json');
                }
            } else {
                return false;
            }
            return true;
        };
        formEnabled = function(val) {
            val = !val;
            $("#c-nombre").jqxInput({disabled: val});
            $("#c-ci").jqxInput({disabled: val});
            $("#c-tel").jqxInput({disabled: val});
            $("#c-dir").jqxInput({disabled: val});
        };
        clean = function() {
            $("#c-nombre").val("");
            $("#c-ci").val("");
            $("#c-tel").val("");
            $("#c-dir").val("");
        };
        var temp = _.template($("#cliente-form-temp").html(), {});
        this.$el.html(temp);
        clientesTable.render();
        formEnabled(false);
        
        clients();

    }
});
var VentasTable = Backbone.View.extend({
    el: '#table-container',
    render: function() {
        temp = _.template($("#tabla-vent-temp").html(), {});
        this.$el.html(temp);
    }
});
var ventasTable = new VentasTable();
var Ventas = Backbone.View.extend({
    el: '#form-container',
    render: function() {

        temp = _.template($("#venta-form-temp").html(), {});
        this.$el.html(temp);
        ventasTable.render();
       
        getAdapter = function() {
            var source =
                    {
                        datatype: "json",
                        datafields:
                                [
                                    {name: 'id', type: 'number'},
                                    {name: 'idCli', type: 'string'},
                                    {name: 'cliCI', type: 'string'},
                                    {name: 'cliNombre', type: 'string'},
                                    {name: 'fecha', type: 'date'},
                                     {name: 'detalle', type: 'string'},
                                    {name: 'productos', type: 'string'},
                                    {name: 'total', type: 'number'}
                                ],
                        type: "GET",
                        url: "webresources/ventas"

                    };
            return new $.jqx.dataAdapter(source);
        };
        clean = function() {
            $('#v-date').jqxDateTimeInput('setDate', new Date());
            $("#v-cliente").jqxComboBox('selectedIndex', -1);
            $("#v-cnombre").val("");
            $("#v-cci").val("");
            var data = '[]';
            var sourceProductos =
                    {
                        localdata: data,
                        datatype: "jsonp",
                        datafields:
                                [
                                    {name: 'id', type: 'string'},
                                    {name: 'costo', type: 'string'},
                                    {name: 'nombre', type: 'string'},
                                    {name: 'descripcion', type: 'number'},
                                    {name: 'total', type: 'number'},
                                    {name: 'action', type: 'string'}
                                ],
                        deleterow: function(rowid, commit) {
                            // synchronize with the server - send delete command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            commit(true);
                        },
                        addrow: function(rowid, rowdata, position, commit) {
                            // synchronize with the server - send insert command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                            commit(true);
                        }
                    };
            var productosDataAdapter = new $.jqx.dataAdapter(sourceProductos);
            $("#v-detalle").jqxGrid('source', productosDataAdapter);
        };
        formEnabled = function(val) {
            val = !val;
            $('#v-date').jqxDateTimeInput('disabled', val);
            $("#v-cliente").jqxComboBox('disabled', val);
            $("#v-detalle").jqxGrid('disabled', val);
            $("#v-paddrow").jqxButton('disabled', val);
        };
        guardar =  function () {
            var detalle = [];
            var producto = {};
            var productosArray = $('#v-detalle').jqxGrid('getrows');
            var total= 0;
            var filas = $("#v-detalle").jqxGrid('getdatainformation').rowscount;
            
            for ( i=0;i<filas;i++){
                console.log(i);
                producto = new Object();
                producto.prodNom = productosArray[i].nombre;
                producto.prodCod = parseInt(productosArray[i].id);
                producto.cantidad = productosArray[i].cantidad;
                producto.precio = productosArray[i].costo;
                total += producto.cantidad*producto.precio;
                console.log("Iteracion "+i);
                console.log(producto);
                detalle.push(producto);
                console.log(detalle);
                console.log("Fin Iteracion "+i);
                
            }
            console.log("Detalle");
            console.log(productosArray);
            console.log(detalle);
            var venta = {};
            venta.idCli = $("#v-cliente").jqxComboBox('getSelectedItem').originalItem.id;
            venta.fecha = $("#v-date").val();
            venta.productos = JSON.stringify(detalle);
            venta.total = total;
            var data = venta;
            if (estado === 2) {
                    console.log("put a /"+idV);
                    $.ajax({
                        url: 'webresources/ventas/' + idV,
                        type: 'PUT',
                        data: JSON.stringify(data),
                        success: function(result) {
                            $("#table-ventas").jqxGrid({source: getAdapter()});
                        }
                    });
                } else {
                    $.ajax({
                        url: 'webresources/ventas/',
                        type: 'POST',
                        data: data,
                        success: function(result) {
                            $("#table-ventas").jqxGrid({source: getAdapter()});
                        }
                    });
                }
            return true;
        };
        borrar = function(){
            var row = $("#table-ventas").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-ventas").jqxGrid('getdatainformation').rowscount;
            if (row < 0 || row >= rowCount) {
                return;
            }
            estado = 3;

            var data = $("#table-ventas").jqxGrid('getrowdata', row);
            if (confirm("Desea Borrar la Venta " + data.id + "?")) {
                $.ajax({
                    url: 'webresources/ventas/' + data.id,
                    type: 'DELETE',
                    success: function(result) {
                        $("#table-ventas").jqxGrid({source: getAdapter()});
                    }
                });
            }
            row = -1;
        };
        editar = function(){
            formEnabled(false);
            var row = $("#table-ventas").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-ventas").jqxGrid('getdatainformation').rowscount;

            if (row < 0 || row >= rowCount) {

                //editar(row);
                return;
            }
            estado = 4;
            var data = $("#table-ventas").jqxGrid('getrowdata', row);
            $("#v-date").val(data.fecha);
            console.log(data);
            
            $("#v-cliente").val(data.cliNombre);
            $("#v-cnombre").val(data.cliNombre);
            $("#v-cci").val(data.cliCI);
            var prod = JSON.parse(data.productos);
            console.log("PRODUCTO");
            console.log(prod);
            var det = {};
            console.log(prod);
            for(i in prod){
                console.log(prod[i]);
                det = new Object();
                det["id"] = prod[i].prodCod;
                det["nombre"] = prod[i].prodNom;
                det["costo"] = prod[i].precio;
                det["cantidad"] = prod[i].cantidad;
                det["total"] = prod[i].precio*prod[i].cantidad;
                $("#v-detalle").jqxGrid('addrow', null, det);
            }
            console.log("DET");
            console.log(det);
            console.log("whot"+data.id);
            idV = data.id;
        };
        sales();
        
    }
});
var PagosTable = Backbone.View.extend({
    el: '#table-container',
    render: function() {
        temp = _.template($("#tabla-pagos-temp").html(), {});
        this.$el.html(temp);
    }
});
var pagosTable = new PagosTable();
var Pagos = Backbone.View.extend({
    el: '#form-container',
    render: function() {
        getAdapter = function() {
            var source =
                    {
                        datatype: "json",
                        datafields:
                                [
                                    {name: 'id', type: 'number'},
                                    {name: 'idVenta', type: 'number'},
                                    {name: 'fecha', type: 'string'},
                                    {name: 'monto', type: 'number'}
                                ],
                        type: "GET",
                        url: "webresources/pagos",
                        addrow: function(rowid, rowdata, position, commit) {
                            // synchronize with the server - send insert command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                            commit(true);
                        },
                        deleterow: function(rowid, commit) {
                            // synchronize with the server - send delete command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            commit(true);
                        },
                        updaterow: function(rowid, newdata, commit) {
                            // synchronize with the server - send update command
                            // call commit with parameter true if the synchronization with the server is successful 
                            // and with parameter false if the synchronization failed.
                            commit(true);
                        }
                    };
            return new $.jqx.dataAdapter(source);
        };
        editar = function(row) {
            var row = $("#table-pagos").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-pagos").jqxGrid('getdatainformation').rowscount;

            if (row < 0 || row >= rowCount) {
                console.log(row);

                //editar(row);
                return;
            }
            estado = 2;
            var data = $("#table-pagos").jqxGrid('getrowdata', row);
            console.log(data);
            $("#pg-idVenta").val(data.idVenta);
            $("#pg-fecha").val(data.fecha);
            $("#pg-monto").val(data.monto);
            id = data.id;
        };

        borrar = function() {
            var row = $("#table-pagos").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-pagos").jqxGrid('getdatainformation').rowscount;
            console.log(rowCount);
            if (row < 0 || row >= rowCount) {
                console.log(row);
                console.log(borrar);

                return;
            }
            estado = 3;

            var data = $("#table-pagos").jqxGrid('getrowdata', row);
            if (confirm("Desea Borrar el Pago " + data.nombre + "?")) {
                $.ajax({
                    url: 'webresources/pagos/' + data.id,
                    type: 'DELETE',
                    success: function(result) {
                        $("#table-pagos").jqxGrid({source: getAdapter()});
                    }
                });
            }
            row = -1;
        };
        guardar = function() {
            if ($('#pago-form').jqxValidator('validate')) {
                var idVenta = $("#pg-idVenta").val();
                console.log(idVenta);
                var fecha = $("#pg-fecha").val();
                console.log(fecha);
                var monto = $("#pg-monto").val();
                console.log(monto);
                
                var data = {
                    'idVenta': idVenta,
                    'fecha': fecha,
                    'monto': monto
                };
                if (estado === 2) {
                    console.log(data);
                    $.ajax({
                        url: 'webresources/pagos/' + id,
                        type: 'PUT',
                        data: JSON.stringify(data),
                        dataType: 'json',
                        success: function(result) {
                            $("#table-pagos").jqxGrid({source: getAdapter()});
                        }
                    });
                } else {
                    $.post("webresources/pagos", data, function() {
                        $("#table-pagos").jqxGrid({source: getAdapter()});
                    }, 'json');
                }
            } else {
                return false;
            }
            return true;
        };
        formEnabled = function(val) {
            val = !val;
            $("#pg-idVenta").jqxInput({disabled: val});
            $("#pg-fecha").jqxInput({disabled: val});
            $("#pg-monto").jqxInput({disabled: val});
        };
        clean = function() {
            $("#pg-idVenta").val("");
            $("#pg-fecha").val("");
            $("#pg-monto").val("");
        };
        var temp = _.template($("#pagos-form-temp").html(), {});
        this.$el.html(temp);
        pagosTable.render();
        formEnabled(false);
        payments();

    }
});

var ProductosTabla = Backbone.View.extend({
    el: '#table-container',
    render: function() {
        temp = _.template($("#tabla-prod-temp").html(), {});
        this.$el.html(temp);
        products();
    }
});
var productosTabla = new ProductosTabla();
var Productos = Backbone.View.extend({
    el: '#form-container',
    render: function() {
        getAdapter = function() {
            var source =
                    {
                        datatype: "json",
                        datafields:
                                [
                                    {name: 'id', type: 'number'},
                                    {name: 'costo', type: 'number'},
                                    {name: 'nombre', type: 'string'},
                                    {name: 'descripcion', type: 'string'},
                                    {name: 'stock', type: 'number'}
                                ],
                        type: "GET",
                        url: "webresources/productos",
                        addrow: function(rowid, rowdata, position, commit) {
                            // synchronize with the server - send insert command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                            commit(true);
                        },
                        deleterow: function(rowid, commit) {
                            // synchronize with the server - send delete command
                            // call commit with parameter true if the synchronization with the server is successful 
                            //and with parameter false if the synchronization failed.
                            commit(true);
                        },
                        updaterow: function(rowid, newdata, commit) {
                            // synchronize with the server - send update command
                            // call commit with parameter true if the synchronization with the server is successful 
                            // and with parameter false if the synchronization failed.
                            commit(true);
                        }
                    };
            return new $.jqx.dataAdapter(source);
        };
        editar = function(row) {
            var row = $("#table-productos").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-productos").jqxGrid('getdatainformation').rowscount;

            if (row < 0 || row >= rowCount) {

                //editar(row);
                return;
            }
            estado = 2;
            var data = $("#table-productos").jqxGrid('getrowdata', row);
            $("#p-nombre").val(data.nombre);
            $("#p-precio").val(data.costo);
            $("#p-desc").val(data.descripcion);
            $("#p-stock").val(data.stock);
            id = data.id;
        };
        borrar = function() {
            var row = $("#table-productos").jqxGrid('getselectedrowindex');
            var rowCount = $("#table-productos").jqxGrid('getdatainformation').rowscount;
            if (row < 0 || row >= rowCount) {

                return;
            }
            estado = 3;

            var data = $("#table-productos").jqxGrid('getrowdata', row);
            if (confirm("Desea Borrar el Producto " + data.nombre + "?")) {
                $.ajax({
                    url: 'webresources/productos/' + data.id,
                    type: 'DELETE',
                    success: function(result) {
                        $("#table-productos").jqxGrid({source: getAdapter()});
                    }
                });
            }
            row = -1;
        };
        guardar = function() {
            if ($('#producto-form').jqxValidator('validate')) {
                var nombre = $("#p-nombre").val();
                var precio = $("#p-precio").val();
                var desc = $("#p-desc").val();
                var stock = $("#p-stock").val();
                var data = {
                    'id': id,
                    'nombre': nombre,
                    'costo': precio,
                    'descripcion': desc,
                    'stock': stock
                };
                if (estado === 2) {
                    $.ajax({
                        url: 'webresources/productos/' + id,
                        type: 'PUT',
                        data: JSON.stringify(data),
                        dataType: 'json',
                        success: function(result) {
                            $("#table-productos").jqxGrid({source: getAdapter()});
                        }
                    });
                } else {
                    $.post("webresources/productos", data, function() {
                        $("#table-productos").jqxGrid({source: getAdapter()});
                    }, 'json');
                }
            } else {
                return false;
            }
            return true;
        };
        formEnabled = function(val) {
            val = !val;
            $("#p-nombre").jqxInput({disabled: val});
            $("#p-precio").jqxInput({disabled: val});
            $("#p-desc").jqxInput({disabled: val});
            $("#p-stock").jqxInput({disabled: val});
        };
        clean = function() {
            $("#p-nombre").val("");
            $("#p-precio").val("");
            $("#p-desc").val("");
            $("#p-stock").val("");
        };
        var temp = _.template($("#producto-form-temp").html(), {});
        this.$el.html(temp);
        productosTabla.render();
        formEnabled(false);
    }
});
$("form-container").html("lol");
var clientes = new Clientes();
var ventas = new Ventas();
var pagos = new Pagos();
var opciones = new Opciones();
var productos = new Productos();
var navegacion = new Navegacion();
router.on('route:productos', function() {
    navegacion.render();
    productos.render();
    opciones.render();
});
router.on('route:home', function() {
    navegacion.render();
});
router.on('route:clientes', function() {
    navegacion.render();
    clientes.render();
    opciones.render();
});
router.on('route:ventas', function() {
    navegacion.render();
    ventas.render();
    
    opciones.render();
    //$("#editar-btn").attr('value','Ver');
    $("#editar-btn").html('Ver');
    console.log( $("#editar-btn"));
    console.log( $("#editar-btn").attr('innerHtml'));
    
});
router.on('route:pagos', function() {
    navegacion.render();
    pagos.render();
    opciones.render();
});
Backbone.history.start();


