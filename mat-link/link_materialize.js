var el = wp.element.createElement;




wp.blocks.registerBlockType('materialize/link', {

    title: 'Materialize link',

    icon: 'lightbulb',

    category: 'common',

    attributes: { // The data this block will be storing

        label: { type: 'string' },
        link: { type: 'string' },
        color: { type: 'string' },
        type: { type: 'string' }
    },

    edit: function(props) {

        function updateLink(event) {
            props.setAttributes({ link: event.target.value });
        }

        function updateLabel(event) {
            props.setAttributes({ label: event.target.value });
        }

        function updateType(event) {
            props.setAttributes({ type: event.target.value });
        }

        function updateColor(event) {
            props.setAttributes({ color: event.target.value });

        }

        return el('div', { className: 'mat-link-props ' + props.attributes.color },
            el('input', {
                type: 'text',
                onChange: updateLabel,
                placeholder: 'Enter label here...',
                value: props.attributes.label,
            }),
            el('input', {
                type: 'text',
                onChange: updateLink,
                placeholder: 'Enter LINK here...',
                value: props.attributes.link,
            }),
            el(
                'select', {
                    value: props.attributes.type,
                    onChange: updateType
                },
                el("option", { value: "btn" }, "Normal"),
                el("option", { value: "btn-small" }, "Small"),
                el("option", { value: "btn-large" }, "Large")),
            el(
                'select', {
                    value: props.attributes.color,
                    onChange: updateColor
                },
                el("option", { value: "red darken-4" }, "Red"),
                el("option", { value: "yellow darken-4" }, "Yellow"),
                el("option", { value: "light-blue darken-3" }, "Blue"),
                el("option", { value: "green darken-4" }, "Green")
            )
        );
    },

    save: function(props) {
        // How our block renders on the frontend
        var nameClass = 'waves-effect waves-light ' + props.attributes.type + ' ' + props.attributes.color;
        return el('a', { href: props.attributes.link, className: nameClass },
            props.attributes.label);
    }
})